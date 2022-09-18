import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { SharedService } from 'src/Services/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  account_type: any;


  columnDefs: ColDef[] = [
    { field: 'product_name',headerName: 'Product Name', sortable: true, filter: true },
    { field: "product_category",headerName: 'Catagory', sortable: true, filter: true },
    { field: "product_price",headerName: 'Price', sortable: true, filter: true },
    { field: "id",headerName: 'Product a Id', sortable: true, filter: true },
    { field: "product_added_by",headerName: 'Product Owner', sortable: true, filter: true },
    { field: "created_at",headerName: 'Purches Date', sortable: true, filter: true },
  ];

  rowData = [];

  getPurches(){
  this.SharedService_.getPurches(null).subscribe((res: any) => {
    if (res.status == 200) {
      this.rowData = res.data;
      console.log(res.data)
      this.toastr.success(res.message)
    } else {
      this.toastr.error(res.message)
    }
  }, err => this.toastr.error(err));
}

constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }

ngOnInit(): void {
  this.account_type = sessionStorage.getItem('account_type')
  this.getPurches()
}

}
