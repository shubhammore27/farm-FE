import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  products : any = [];


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

}
