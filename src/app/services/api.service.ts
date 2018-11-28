import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  activateCard(data: any) {
    return this.http.post(environment.baseUrl + '/v3/card/activate', data);
  }

  createPin(data: any) {
    return this.http.post(environment.baseUrl + '/card/pin/create', data);
  }
}
