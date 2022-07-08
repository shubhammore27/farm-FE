import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
  auth_  = new FormControl('2');

  constructor( public SharedService_: SharedService, public toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.auth();
  }

  auth(){
    const body = { id : this.auth_.value }
    this.SharedService_.auth(body).subscribe((res :any ) => {
      if(res.status== 200){
        if (res.data[0]   == '741-789') {
          this.toastr.success(res.message)
          this.router.navigateByUrl('/home')
        }else{
          this.toastr.error(res.message)
        }
      }else{
        this.toastr.error(res.message)
      }
    }, (err :any) => {})
  }

}
