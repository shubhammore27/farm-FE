import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UrlMapping } from '../UrlMapping';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  // =========================DO NOT CHANGE THIS  or applicain will be borken down===================
  
  authoried(){
    if(!!sessionStorage.getItem('auth')){
      return true
    }else{
      return false
    }
  }

  // ============================ SHARED APIS============================
  
  sendOTP(email: any) {
    return this.http.post(environment.baseUrl + UrlMapping.sendOTP, email)
  }

  auth(body: any) {
    return this.http.post(environment.baseUrl + UrlMapping.auth, body)
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

  getFarmerDetails(body :any ){
    return this.http.post(environment.baseUrl + UrlMapping.getFarmerDetails, body)
  }

  updateProfile(body:any){
    return this.http.post(environment.baseUrl + UrlMapping.updateProfile, body)
  }

  // chat APIs
  sendChat(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.sendChat, body)
  }

  getChat(body :any){
    return this.http.post(environment.baseUrl + UrlMapping. getChat, body)
  }

  getProfileForChat(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.getProfileForChat, body)
  }


  // ============================ ADMIN APIS ============================

  addProduct(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.add_product, body)
  }

  getAllProduct(body : any) {
    return this.http.post(environment.baseUrl + UrlMapping.get_all_product, body)
  }

  updateProduct(body :any) {
    return this.http.post(environment.baseUrl + UrlMapping.update_product, body)
  }

  getProduct(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.get_product, body)
  }

  deleteProduct(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.deleteProduct, body)
  }

  
  //============================ Farmer APIs ============================

  getCart(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.getCart, body)
  }

  addToCart(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.addToCart, body)
  }

  getWishList(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.getWishList, body)
  }

  addToWishList(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.addToWishList, body)
  }

  deleteFromCart(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.deleteFromCart, body)
  }

  deleteFromWishList(body:any) {
    return this.http.post(environment.baseUrl + UrlMapping.deleteFromWishList, body)
  }

}
