import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: Http
  ) { }

  activateCard(data: any) {
    return this.http.post(environment.baseUrl + '/v3/card/activate', data);
  }
}
