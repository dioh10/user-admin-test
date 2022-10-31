import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private data = new BehaviorSubject({});
  currentData:any = this.data.asObservable();

  constructor() { }
  communicateData(data: any) {
    this.data.next(data);
  }
}
