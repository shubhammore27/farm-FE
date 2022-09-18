import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products  :any = [];
  farmer_id :any
  cartProducts : any[] = [];
  wishList :any[] = [];
  total : number = 0
  afterDiscount : number = 0
  private fb: FormBuilder = new FormBuilder()

  constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.farmer_id = sessionStorage.getItem('currentUserId')
    this.getCart()
  }

  getCart(){
    let body = {farmer_id : this.farmer_id, cart : true, wishlist : false }
    this.SharedService_.getProduct(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.cartProducts = res.data
        this.calculateTotalAndDiscount()
      }else{
        this.cartProducts = []
        this.total = 0;
        this.afterDiscount = 0;
      }
    }, err => this.toastr.error(err));
  }

  getWishList() {
    let body = {farmer_id : this.farmer_id }
    this.SharedService_.getWishList(body).subscribe((res:any) =>{
      if(res.status== 200){
        let temp :any[]=[]
        res.data.forEach((element : any) => {
          temp.push(element.product_id)
        });
        this.wishList = temp
      }else{
        this.wishList =[]
      }
    }, err => this.toastr.error(err));
  }

  deleteFromCart(product_id : number) {
    let body = {product_id : product_id, farmer_id : this.farmer_id }
    this.SharedService_.deleteFromCart(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
    
        this.getCart()
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  calculateTotalAndDiscount() {
    this.cartProducts.forEach(product => {
      this.total += parseInt(product.product_price )
      this.afterDiscount += (product.product_price - (product.product_price * product.product_offer / 100))
    });
  }

  checkOut() {
    this.cartProducts.forEach((cartProduct)=> {
      cartProduct['farmer_id'] = this.farmer_id
    })

    this.SharedService_.purches(this.cartProducts).subscribe((res:any) =>{
      if(res.status== 200){
        this.toastr.success(res.message)
        this.getCart()
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

}
