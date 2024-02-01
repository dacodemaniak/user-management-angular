import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.development'
import { Observable } from 'rxjs';
import { RoleType } from '../../../types/role.type';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private static END_POINT: string = 'roles'
  constructor(
    private _httpClient: HttpClient
  ) { }

  public findAll(): Observable<Array<RoleType>> {
    return this._httpClient.get<Array<RoleType>>(
      `${environment.userApiRoot}${RoleService.END_POINT}`
    )
  }
}
