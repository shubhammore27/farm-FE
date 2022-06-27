import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder()

  @Input('selected_product') selected_product : any =[]
  url :any = ''

  ngOnChanges(changes: SimpleChanges) {
    if(changes){
      this.getProductDetails()
    }
  }

    // Create User Form
    Product = this.fb.group({
      product_Id: [''],
      product_name: ['Swaraj 265', Validators.compose([Validators.required, Validators.minLength(10)])],
      product_category: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_price: ['30500', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_offer: ['50050', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_brand: ['Mahendra', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_description: ['A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture.', Validators.compose([Validators.required, Validators.minLength(10)])],
      stock_size: ['5', Validators.compose([Validators.required, Validators.minLength(1)])],
      product_img: ['', Validators.compose([Validators.required])],
  })

  constructor(private SharedService_: SharedService, private toastr: ToastrService) {  }

  addProduct(){
    const body = this.Product.value
    // body['product_img'] = this.Product.controls['product_img'].value.replace("C:\\fakepath\\", '')
    body['product_img'] = this.url 
    this.SharedService_.addProduct(this.Product.value).subscribe((res :any) => {
      if (res['status'] == 200) {
        this.toastr.success("Product Added successfully.")
        this.Product.reset()
        this.url = ''
      } else {
        this.toastr.error("Something went wrong.")
      }
    })
  }

  updateProduct(){
    if (this.Product.invalid) {
      this.toastr.error("Please enter a valid product details.")
      return
    }
    const body = this.Product.value
    // body['product_img'] = this.Product.controls['product_img'].value.replace("C:\\fakepath\\", '')
    body['product_img'] = this.url 
    this.SharedService_.updateProduct(this.Product.value).subscribe((res :any) => {
      if (res['status'] == 200) {
        this.toastr.success("Product updated successfully.")
        this.Product.reset()
        this.url = ''
      } else {
        this.toastr.error("Something went wrong.")
      }
    })
  }

  ngOnInit(): void { }


  getProductDetails(){
    if (this.selected_product != ''){
      const body = {product_Id : this.selected_product}
      this.SharedService_.getProduct(body).subscribe((res:any)=>{
        if(res['status'] == 200){
          this.Product.setValue(res.data[0])
          this.url= '../../assets/img/'+res.data[0].product_img
        }else{
          this.toastr.error("Something went wrong.")
        }
      }, (err)=>{this.toastr.error(err)})
    }
  }

  readUrl(event:any) {
    this.url ='../../assets/img/'+ event.target.files[0].name
    this.Product.controls['product_img'].setValue(this.url)
  }

}
