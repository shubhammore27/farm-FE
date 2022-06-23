import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UrlMapping } from '../UrlMapping';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  sendOTP(email: any) {
    return this.http.post(environment.baseUrl + UrlMapping.sendOTP, email)
  }

  farmer_registration(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.farmer_registration, body)
  }

  
  verifyEmail(email: any) {
    return this.http.post(environment.baseUrl + UrlMapping.verifyEmail, email)
  }

  login(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.login, body)
  }


}
