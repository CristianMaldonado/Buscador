import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  error = { header: 'Error', data: ''}


  getRespuesta() {
    return new Promise(
      (resolve, reject) => {
        resolve(this.error)
    })
  }

}
