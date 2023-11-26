import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FORM_CONTROL_TYPES, SetFormControls } from '../form-controls/SetFormControls'
import { FormDataModel } from 'src/app/models/FormDataModel';
import { FormDataResponse } from 'src/app/models/FormDataResponse';
import { DataFromInput } from 'src/app/models/DataFromInput';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AdditionalFormDataModel } from 'src/app/models/AdditionalFormDataModel';

@Component({
  selector: 'app-material-form-fields',
  templateUrl: './material-form-fields.component.html',
  styleUrls: ['./material-form-fields.component.scss']
})
export class MaterialFormFieldsComponent {

  @Input() formData: FormDataModel[] = [];
  @Input() containerCssClass: string = "";

  @Output() formSubmitted: EventEmitter<FormDataResponse> = new EventEmitter<FormDataResponse>();
  @Output() callbackFunction: EventEmitter<DataFromInput> = new EventEmitter<DataFromInput>();

  readonly FORM_CONTROL_TYPES = FORM_CONTROL_TYPES;

  public changesMade: boolean = false;

  public setFormControls: SetFormControls = new SetFormControls(undefined);

  ngOnInit() {
    this.setupFormControls();

    if(this.formData != undefined) {
      this.formData.forEach(item => {
        let obs: Observable<any> | undefined = this.setFormControls.getObservable(item.fieldName);
        
        if(obs != undefined) {
          let fc: FormControl | undefined = this.setFormControls.getFormControlByName(item.fieldName);

          if(fc != undefined) {
            this.addObservables(obs, fc, item.fieldName);
          }
        }

        //Set data for text areas.
        if(item.fieldType === FORM_CONTROL_TYPES.INPUT_TEXTAREA || item.fieldType === FORM_CONTROL_TYPES.INPUT_TEXTAREA_CALLBACK) {
          let fc: FormControl | undefined = this.setFormControls.getFormControlByName(item.fieldName);

          if(fc != undefined) {
            let text: any[] | null | undefined = this.getAdditionalValues(item.fieldName);
            fc.setValue(text ? text[0] : '');
          }
        }
      });
    }
  }

  callbackSubmit() : void {
    this.setFormControls.formControlGroup.markAllAsTouched();
    this.formSubmitted.emit(new FormDataResponse(this.setFormControls.formControlGroup, this.setFormControls.getErrors()));
  }

  resetForm() : void {
    this.changesMade = false;
    const controlNames = Object.keys(this.setFormControls.formControlGroup.controls);
    controlNames.forEach(item => {
      this.setFormControls.formControlGroup.controls[item].setValue(null);
    });    
  }

  changeListener($event: any) : void {
    this.changesMade = true;
  }

  inputCallback(index: number, name: string, value: any) : void {
    this.changesMade = true;
    this.callbackFunction.emit(new DataFromInput(index, name, value));
  }  

  inputCallbackConditional(index: number, name: string, value: any) {
    if(this.hasAttribute(name, 'conditionalRegex')) {
      let regex: RegExp | null = this.getAttribute(name, 'conditionalRegex', null);

      if(regex != null && value != null) {
        if(value.toString().match(regex)) {
          this.changesMade = true;
          this.callbackFunction.emit(new DataFromInput(index, name, value));
        }
      }
    }
  }

  selectionCallback(index: number, name: string) : void {
    this.changesMade = true;
    let fc: FormControl | undefined = this.setFormControls.getFormControlByName(name);

    if(fc != undefined) {
      this.callbackFunction.emit(new DataFromInput(index, name, fc.value));
    }
  }
  
  getAdditionalValues(fieldname: string) : any[] | null | undefined {
    if(this.setFormControls.additionalFormData != undefined) {
      let additionalData: any | undefined = this.setFormControls.additionalFormData.find(item => item.fieldname === fieldname);

      if(additionalData != undefined) {
        return additionalData.data
      }
    }

    return undefined;
  }

  hasAttribute(fieldname: string, attribute: string) : boolean {
    if(this.setFormControls.additionalFormData != undefined) {
      let additionalData: any | undefined = this.setFormControls.additionalFormData.find(item => item.fieldname === fieldname);

      if(additionalData.attributes != undefined) {
        let keys = Object.keys(additionalData);
        return (keys.indexOf(attribute) > -1) ? true : false;
      }
    }

    return false;
  }

  getAttribute(fieldname: string, attribute: string, defaultValue: any) : any {
    if(this.setFormControls.additionalFormData != undefined) {
      let additionalData: any | undefined = this.setFormControls.additionalFormData.find(item => item.fieldname === fieldname);

      if(additionalData.attributes != undefined) {
        let keys = Object.keys(additionalData.attributes);
        let values = Object.values(additionalData.attributes);
        let found = keys.indexOf(attribute);

        if(found > -1) {
          return values[found];
        }
      }
    }

    return defaultValue;
  }

  enableSubmitButton() : boolean {
    if(this.changesMade) {
      return true;
    }

    if(this.setFormControls.formControlGroup.valid) {
      return true;
    }

    return false;
  }

  getRows(index: number) : number | undefined {
    if(index < this.formData.length) {
      let data: FormDataModel = this.formData[index];

      if(data.fieldAdditionalData != null && data.fieldAdditionalData != undefined) {
        let additionalData: AdditionalFormDataModel = data.fieldAdditionalData;
        
        if(additionalData.attributes != null && additionalData.attributes != undefined) {
          let obj: object = additionalData.attributes;
          let keys: string[] = Object.keys(obj);
          let values: any[] = Object.values(obj);
          let found: number = keys.indexOf('rows');

          if(found > -1) {
            return values[found];
          }
        }
      }
    }

    return undefined;
  }

  getColumns(index: number) :  number | undefined {
    if(index < this.formData.length) {
      let data: FormDataModel = this.formData[index];

      if(data.fieldAdditionalData != null && data.fieldAdditionalData != undefined) {
        let additionalData: AdditionalFormDataModel = data.fieldAdditionalData;
        
        if(additionalData.attributes != null && additionalData.attributes != undefined) {
          let obj: object = additionalData.attributes;
          let keys: string[] = Object.keys(obj);
          let values: any[] = Object.values(obj);
          let found: number = keys.indexOf('columns');

          if(found > -1) {
            return values[found];
          }
        }
      }
    }

    return undefined;
  }

  private setupFormControls() {
    this.setFormControls = new SetFormControls(this.formData);
  }

  private _filter(value: string, fieldname: string): string[] {
    let options: any[] | undefined | null = this.getAdditionalValues(fieldname);

    if(options != undefined && options != null) {
      const filterValue = value.toLowerCase();
      return options.filter(option => option.toLowerCase().includes(filterValue));
    }
    
    return [];    
  }

  private addObservables(obs: Observable<any>, fc: FormControl, fieldName: string) : void {
    if(fc != undefined) {
      obs = fc.valueChanges.pipe(
        startWith(''),              
        map(value => this._filter(fc?.value || '', fieldName))
      );
    }

    this.setFormControls.setObservable(fieldName, obs);
  }

}