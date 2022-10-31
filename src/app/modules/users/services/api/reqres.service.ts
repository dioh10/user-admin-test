import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {UserList, DataUser} from '../../types/reqres';



@Injectable({
  providedIn: 'root'
})
export class ReqresService {



  constructor(
    private http: HttpClient,
  ) {
  }

  getAllUsers(): Observable<UserList> {
    return this.http.get<UserList>(`${environment.REQRES_API}/users`);
  }

  getUsersByPage(page: number): Observable<UserList> {
    return this.http.get<UserList>(`${environment.REQRES_API}/users?page=${page}`);
  }

  getUserById(id: number): Observable<DataUser> {
    return this.http.get<DataUser>(`${environment.REQRES_API}/users/${id}`);
  }
}
