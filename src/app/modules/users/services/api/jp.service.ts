import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../types/jp';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JpService {

  constructor(private http: HttpClient) { }

  getPostsByUserId(userId?: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.JP_API}/posts?userId=${userId}`);
  }


}
