/* tslint:disable */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private prefixRestPath: string = environment.backEndUrl;

  constructor(private http: HttpClient, private userService: UserService) {}

  public auth() {
    return {
      register: body => this.makeRequest('post', 'api/register', body),
      login: body => this.makeRequest('post', 'api/login', body),
      logout: () => this.makeRequest('get', 'auth/logout'),
      forgotPassword: params => this.makeRequest('put', 'auth/forgot', params),
      changePassword: params => this.makeRequest('put', 'auth/change', params),
    };
  }

  public clients() {
    return {
      clientsList: params =>
        this.makeRequest(
          'get',
          'api/users',
          false,
          this.makeUrlSearchParams(params)
        ),
      client: id => this.makeRequest('get', `api/users/${id}`),
    };
  }

  public resources() {
    return {
      resourcesList: params =>
        this.makeRequest(
          'get',
          'api/unknown',
          false,
          this.makeUrlSearchParams(params)
        ),
      resource: id => this.makeRequest('get', `api/unknown/${id}`),
    };
  }

  private makeRequest(
    method: string,
    restUrl: string,
    body?: any,
    params?: HttpParams
  ): Observable<any> {
    const url = this.prefixRestPath + restUrl;
    const options: any = {
      headers: this.createHeaders(),
    };
    if (method === 'get' || method === 'delete') {
      options.params = params;
      return this.http[method](url, options);
    } else {
      return this.http[method](url, body, options);
    }
  }

  private createHeaders() {
    const user = this.userService.getUser();
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (user) {
      const token = user.token;
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private makeUrlSearchParams(params) {
    let options = new HttpParams();

    for (const key of Object.keys(params)) {
      options = options.set(key, params[key]);
    }
    return options;
  }
}
