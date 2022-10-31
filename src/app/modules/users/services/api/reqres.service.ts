import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {UserList, DataUser, User} from '../../types/reqres';
import {AbstractControl, ValidationErrors, ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';



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

  getUserById(id?: number): Observable<DataUser> {
    if(!id) {
      const dataUser = {} as DataUser;
      return new Observable<DataUser>(subscriber => {
        subscriber.next(dataUser);
      });
    }
    return this.http.get<DataUser>(`${environment.REQRES_API}/users/${id}`);
  }

  editUser(user: ɵTypedOrUntyped<{ [K in keyof { last_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; id: (null | ((control: AbstractControl) => (ValidationErrors | null))[])[]; avatar: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; first_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }]: ɵElement<{ last_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; id: (null | ((control: AbstractControl) => (ValidationErrors | null))[])[]; avatar: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; first_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }[K], null> }, ɵFormGroupValue<{ [K in keyof { last_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; id: (null | ((control: AbstractControl) => (ValidationErrors | null))[])[]; avatar: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; first_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }]: ɵElement<{ last_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; id: (null | ((control: AbstractControl) => (ValidationErrors | null))[])[]; avatar: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; first_name: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]; email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] }[K], null> }>, any>): Observable<User> {
    return this.http.put<User>(`${environment.REQRES_API}/users/${user.id}`, user);
  }
}
