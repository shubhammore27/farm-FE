import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from 'src/Services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _Router: Router, public SharedService_: SharedService, ){}


  canActivate() : boolean{
    if(this.SharedService_.authoried()){
      console.warn 
      return true
    }else{
      console.error
      this._Router.navigate(['']);
      return false
    }
  }
  
}
