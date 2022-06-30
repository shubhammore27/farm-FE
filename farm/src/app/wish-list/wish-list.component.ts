import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishListProducts : any[] = [];
  farmer_id : any;
  cartProducts : any[] = [];

  constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.farmer_id = sessionStorage.getItem('farmer_id')
    this.getWishList()
    this.getCart()
  }


  getWishList() {
    let body = {farmer_id : this.farmer_id, wishlist : true, cart : false}
    this.SharedService_.getProduct(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.wishListProducts = res.data
      }else{
        this.wishListProducts = []
      }
    }, err => this.toastr.error(err));
  }

  addToWishList(product_id : any ){
    let body = {product_id : product_id, farmer_id : this.farmer_id }
    this.SharedService_.addToWishList(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
        this.getWishList()
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  deleteFromWishList(product_id : any){
    let body = {product_id : product_id, farmer_id : this.farmer_id }
    this.SharedService_.deleteFromWishList(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
        this.getWishList()
      }if(res.status== 400){
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  deleteFromCart(product_id : number) {
    let body = {product_id : product_id, farmer_id : this.farmer_id }
    this.SharedService_.deleteFromCart(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
        this.getWishList()
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  getCart(){
    let body = {farmer_id : this.farmer_id,  wishlist : false, cart : true}
    this.SharedService_.getProduct(body).subscribe((res:any) =>{
      if(res.status== 200){
        let temp :any[]=[]
        res.data.forEach((element : any) => {
          temp.push(element.product_Id)
        });
        this.cartProducts = temp
      }else{
        this.cartProducts = []
      }
    }, err => this.toastr.error(err));
  }

  addToCart(product_id: number){
    let body = {product_id : product_id, farmer_id : this.farmer_id }
    this.SharedService_.addToCart(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
        this.getCart()
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }


}
