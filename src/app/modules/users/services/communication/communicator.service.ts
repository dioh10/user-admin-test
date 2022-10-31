import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private data = new BehaviorSubject({});
  private blogPostId = new BehaviorSubject<number>(0);
  currentData:any = this.data.asObservable();
  currentBlogPostId = this.blogPostId.asObservable();

  constructor() { }
  communicateData(data: any) {
    this.data.next(data);
  }
  deletePost(id: number) {
    this.blogPostId.next(id);
  }
}
