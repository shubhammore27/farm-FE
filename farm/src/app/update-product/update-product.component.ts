import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products : any= [];
  selected_product : any
  account_type : any

  constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.account_type = sessionStorage.getItem('account_type');
    const body = {userType : sessionStorage.getItem('account_type'), userId : sessionStorage.getItem('currentUserId')}
    this.SharedService_.getAllProduct(body).subscribe((res:any) =>{
      if(res.status== 200){
        this.products = res.data

      }else{
        this.toastr.error(res.message)
      }
    }, err => this.toastr.error(err));
  }

  get_product_to_update(event:any){
    this.selected_product = event.target.value
  }

}
