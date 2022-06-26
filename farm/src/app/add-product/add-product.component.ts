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

  @Input('selected_product') selected_product : FormBuilder = new FormBuilder()
  url :any

  ngOnChanges(changes: SimpleChanges) {
    if(changes){
      this.ngOnInit()
    }
  }

    // Create User Form
    Product = this.fb.group({
      product_Id: [''],
      product_name: ['Swaraj 265', Validators.compose([Validators.required, Validators.minLength(10)])],
      product_category: ['Trending', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_price: ['30500', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_offer: ['50050', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_brand: ['Mahendra', Validators.compose([Validators.required, Validators.minLength(3)])],
      product_description: ['A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture.', Validators.compose([Validators.required, Validators.minLength(10)])],
      stock_size: ['5', Validators.compose([Validators.required, Validators.minLength(6)])],
      product_img: ['', Validators.compose([Validators.required])],
  })

  constructor(private SharedService_: SharedService, private toastr: ToastrService) {  }

  addProduct(){
    console.log(this.Product.value)
    const body = this.Product.value
    body['product_img'] = this.Product.controls['product_img'].value.replace("C:\\fakepath\\", '')
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

  ngOnInit(): void {
    console.log('CHILD')
    const body = {product_Id : this.selected_product}

    console.log('body', body)
    this.SharedService_.getProduct(body).subscribe((res:any)=>{
      if(res['status'] == 200){
        console.log(res.data[0])
        this.Product.setValue(res.data[0])
      }else{
        this.toastr.error("Something went wrong.")
      }
    }, (err)=>{this.toastr.error(err)})
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
