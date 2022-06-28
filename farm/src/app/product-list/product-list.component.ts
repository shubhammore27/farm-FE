import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products : any = [];
  selected_product : any
  deleteProductList : any = [];

  constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }


  getAllProducts(){
    this.SharedService_.getAllProduct().subscribe((res:any) =>{
      if(res.status== 200){
        this.products = res.data
      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  deleteProduct(){
    const body  = { product_id : this.deleteProductList}
    this.SharedService_.deleteProduct(body).subscribe((res :any) => {
      if(res.status = 200){
        this.toastr.success(res.message)
        this.getAllProducts()
        this.deleteProductList = []
      }else{
        this.toastr.error(res.message)
      }
    },err => {this.toastr.error(err.message)});
  }

  checked(id:any, event :any){
    if(event.checked){
      this.deleteProductList.push(id)
    }else{
      this.deleteProductList.splice(this.deleteProductList.indexOf(id),1)
    }
  }

}
