import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { UserType } from '../../../types/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) { }

  findAll(): Observable<Array<UserType>> {
    return this.httpClient.get<Array<UserType>>(
      `${environment.userApiRoot}users`
    )
  }

  add(user: any): Observable<HttpResponse<any>> {

    return this.httpClient.post(
      `${environment.userApiRoot}users`,
      user,
      {
        observe: 'response'
      }
    )
  }
}
