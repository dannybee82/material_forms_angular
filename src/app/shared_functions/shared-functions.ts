import { FormDataResultInterface } from "../models/interfaces/form-data-result.interface";
import { Component, computed, inject, OnDestroy, signal, WritableSignal } from "@angular/core";
import { MaterialSnackbarComponent } from "../components/material-snackbar/material-snackbar.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormDataCallbackInterface } from "../models/interfaces/form-data.callback.interface";

@Component({
    template: ``
})
export class SharedFunctions implements OnDestroy {

    protected dataFromSubmit: WritableSignal<FormDataResultInterface | undefined> = signal<FormDataResultInterface | undefined>(undefined);
    protected dataFromCallback: WritableSignal<FormDataCallbackInterface | undefined> = signal<FormDataCallbackInterface | undefined>(undefined);

    protected readonly dataFromSubmitView = computed(() => {
      const r = this.dataFromSubmit();
      return r && { ...r, data: Object.fromEntries(r.data) };
    });

    protected readonly dataFromCallbackView = computed(() => {
      const r = this.dataFromCallback();
      return r && { ...r, data: Object.fromEntries(r.data) };
    });

    private readonly materialSnackbar = inject(MatSnackBar);

    protected showData(formDataResponse: FormDataResultInterface): void {
        this.dataFromSubmit.set(formDataResponse);
        this.materialSnackbar.openFromComponent(MaterialSnackbarComponent, {
            data: `<strong>Data Submit:</strong><br/><pre>${JSON.stringify(this.dataFromSubmitView(), null, " ")}</pre>`
        });
    }

    protected receiveCallback(data: FormDataCallbackInterface): void {
        this.dataFromCallback.set(data);
        this.materialSnackbar.openFromComponent(MaterialSnackbarComponent, {
            data: `<strong>Callback:</strong><br/><pre>${JSON.stringify(this.dataFromCallbackView(), null, " ")}</pre>`
        });
    }

    ngOnDestroy(): void {
        this.materialSnackbar.dismiss();        
    }

}