import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CustomDateAdapter extends NativeDateAdapter {
  private _datePipe: DatePipe = new DatePipe("nl-NL");

    constructor() {
      super('nl-NL');
    }

    override parse(value: string) {      
      let it=[];

      if(value.indexOf('-') > -1) {
        value = value.replaceAll('-', '/');
      }

      it=value.split('/');
      if (it.length==3)
      {
        return new Date(+it[2],+it[1]-1,+it[0],12)        
      }
  
      return null;
    }
  
    override format(date: Date, displayFormat: Object) {
      // return ('0'+date.getDate()).slice(-2)+'/'+
      //      ('0'+(date.getMonth()+1)).slice(-2)+'/'+date.getFullYear()
      return this._datePipe.transform(date, "dd/MM/YYYY") || "";
    }
  }