import { Component, input, InputSignal, OnInit, output, OutputEmitterRef, Signal, viewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { SetFormControls } from 'src/app/shared_functions/set-form-controls.class';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { GenericAdditionalDataInterface } from 'src/app/models/interfaces/generic-additional-data.interface';
import { map, Observable, startWith, Subject } from 'rxjs';
import { GenericFormOptionInterface } from 'src/app/models/interfaces/generic-form-option.interface';
import { FormDataResultInterface } from 'src/app/models/interfaces/form-data-result.interface';
import { AllAngularMaterialModules } from 'src/app/all-angular-material.modules';
import { FormDataCallbackInterface } from 'src/app/models/interfaces/form-data.callback.interface';

@Component({
	imports: [
		AllAngularMaterialModules,
		FormsModule,
		ReactiveFormsModule,
    AsyncPipe
	],
  selector: 'app-material-form-fields',
  templateUrl: './material-form-fields.component.html',
  styleUrls: ['./material-form-fields.component.scss']
})
export class MaterialFormFieldsComponent {

  readonly formData: InputSignal<GenericFormInterface> = input.required<GenericFormInterface>();
  readonly getFormData: InputSignal<Subject<boolean> | undefined> = input.required<Subject<boolean> | undefined>();

  protected readonly formSubmit: OutputEmitterRef<FormDataResultInterface> = output<FormDataResultInterface>();
  protected readonly formCallback: OutputEmitterRef<FormDataCallbackInterface> = output<FormDataCallbackInterface>();

  protected readonly materialForm: Signal<NgForm | undefined> = viewChild<NgForm | undefined>('materialForm');

  public formControls: SetFormControls = new SetFormControls(undefined);

  ngOnInit(): void {
    this.setupFormControls();

     this.formData().formFields.forEach((item: GenericFormFieldInterface) => {
      // Add Observables, when there is an Observable.
      const obs: Observable<string[] | number[] | boolean[]> | undefined = this.formControls.getObservable(item.property);
    
      if(obs) {
        const fc: FormControl | undefined = this.formControls.getFormControlByName(item.property);

        if(fc) {
          this.addObservables(obs, fc, item.property);
        }
      }

      // Quirk: Set values for Text Areas.
      const fc: FormControl | undefined = this.formControls.getFormControlByName(item.property);

      if(fc) {
        fc.setValue(item.value);
      }
     });

     if(this.getFormData()) {
        this.getFormData()!.subscribe((requestForData: boolean) => {
          if(requestForData) {
            this.callbackSubmit();
          }
        });
     }
  }

  callbackSubmit() : void {
    this.formControls.formControlGroup.markAllAsTouched();
    const data: Map<string, any> = new Map<string, any>();

    Object.keys(this.formControls.formControlGroup.controls).forEach((k: string) => {
      const field: GenericFormFieldInterface | undefined = this.formData().formFields.find(item => item.property === k);  
      if(field) {
        if(field.inputType === InputTypeEnum.INPUT_DATE || field.inputType === InputTypeEnum.INPUT_DATE_CALLBACK) {
          // Fix bug with dates.
          const value = this.correctDate(this.formControls.formControlGroup.controls[k].value as Date);
          data.set(k, value);
        } else {
          const value = this.formControls.formControlGroup.controls[k].value;
          data.set(k, value);
        }
      } else {
        const value = this.formControls.formControlGroup.controls[k].value;
        data.set(k, value);
      }      
    });
    const errors: string[] = this.formControls.getErrors();
    const result: FormDataResultInterface = {
      hasErrors: errors.length > 0 ? true : false,
      errors: errors,
      data: data
    };

    this.formSubmit.emit(result);
  }

  protected resetForm() : void {
    const controlNames = Object.keys(this.formControls.formControlGroup.controls);
    controlNames.forEach(item => {
      this.formControls.formControlGroup.controls[item].setValue(null);
    });    

    if(this.materialForm()) {
      this.materialForm()!.reset();
    }    
  }

  protected inputCallback(index: number, property: string, value: string | number | boolean | Date | object) : void {
    const field: GenericFormFieldInterface | undefined = (index < this.formData().formFields.length && index > -1) ? 
      this.formData().formFields[index] :
      undefined;

    if(field) {
      if(field.inputType === InputTypeEnum.INPUT_DATE || field.inputType === InputTypeEnum.INPUT_DATE_CALLBACK) {
        // Fix bug with dates.
        const correctedDate = this.correctDate(value as Date);
        if(correctedDate) {
          value = correctedDate;
        }
        // also store its value.
        if(value) {
          field.value = value as Date;
        }        
      }
    }
     
    const data: Map<string, any> = new Map<string, any>([
      ["property", property],
      ["value", value]
    ]);
    const result: FormDataCallbackInterface = {
      data: data
    };
    this.formCallback.emit(result);
  }  

  protected getOptions(property: string): GenericFormOptionInterface[] {
    const found: GenericFormFieldInterface | undefined = this.formData().formFields.find(item => item.property === property);

    if(found) {
      return found.options;
    }

    return [];
  }

  protected getOptionsOfField(property: string) : string[] | number[] | boolean[] | null | undefined {
    const formField: GenericFormFieldInterface | undefined = this.formData().formFields.find(item => item.property === property);

    if(formField) {
      switch(formField.inputType) {
        case InputTypeEnum.INPUT_TEXT_AUTOCOMPLETE:
          return formField.options.map(item => item.label);
        case InputTypeEnum.INPUT_TEXT_AUTOCOMPLETE_CALLBACK:
          return formField.options.map(item => item.label);
      }
    }

    return undefined;
  }

  protected selectionCallback(index: number, property: string) : void {
    const fc: FormControl | undefined = this.formControls.getFormControlByName(property);

    if(fc) {
      const data: Map<string, any> = (new Map<string, any>([
        ["name", property],
        ["value", fc.value]
      ]));
      const result: FormDataCallbackInterface = {
        data: data
      };
      this.formCallback.emit(result);
    }
  }

  protected getAdditionalData(index: number, attribute: string): string | number | boolean | RegExp | null | undefined {
    if(index < (this.formData()?.formFields.length ?? 0)) {
      let formField: GenericFormFieldInterface = this.formData().formFields[index];

      if(formField.additionalData) {
        const item: GenericAdditionalDataInterface | undefined = formField.additionalData.find(item => item.attribute === attribute);
        if(item) {
          return item.value;
        }
      }
    }

    return undefined;
  }

  protected hasAttribute(property: string, attribute: string): boolean {
    const additionalData: GenericAdditionalDataInterface | undefined = this.formControls.getAdditionalDataAttribute(property, attribute);

    if(additionalData) {
      return true;
    }

    return false;
  }

  protected getAttribute(property: string, attribute: string, defaultValue: string | number | boolean | Date | RegExp | object | null): string | number | boolean | Date | RegExp | object | null {
    const additionalData: GenericAdditionalDataInterface | undefined = this.formControls.getAdditionalDataAttribute(property, attribute);

    if(additionalData) {
      return additionalData.value;
    }

    return defaultValue;
  }

  protected getFormControlTypeEnum(): typeof InputTypeEnum {
    return InputTypeEnum;
  }

  private setupFormControls(): void {
    this.formControls = new SetFormControls(this.formData().formFields);
  }

  private addObservables(obs: Observable<string[] | number[] | boolean[]>, fc: FormControl, fieldName: string) : void {
    if(fc) {      
      obs = fc.valueChanges.pipe(
        startWith(''),              
        map(value => this._filter(fc?.value || '', fieldName))
      );
    }

    this.formControls.setObservable(fieldName, obs);
  }

  private _filter(value: string, property: string): string[] {
    let options: string[] | number[] | boolean[] | undefined | null = this.getOptionsOfField(property);

    if(options) {
      const filterValue = value.toLowerCase();
      return options.filter(option => option.toString().toLowerCase().includes(filterValue)).map(item => item.toString());
    }
    
    return [];    
  }

  private correctDate(date?: Date): Date | undefined {
    if(date) {
       return new Date(
        date!.getFullYear(),
        date!.getMonth(),
        date!.getDate(),
        12
      );
    }
    
    return undefined;  
  }

}