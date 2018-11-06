import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private observer$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  notificarDatos(data: any) {
    this.observer$.next(data);
  }

  getDatos() {
    return this.observer$.asObservable();
  }

}
