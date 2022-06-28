import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public fb:FormBuilder, public SharedService_: SharedService, public toastr: ToastrService, private router: Router) { }

  login_form =  this.fb.group(
    {
      username: ['farmer@gmail.com', Validators.required],
      password: ['123123', Validators.required],
    }
  );

  login() {
    if (this.login_form.valid) {
      this.SharedService_.login(this.login_form.value).subscribe((res : any)  => {
        if(res.status == 200){
          this.toastr.success("Login Successfull.")
          sessionStorage.setItem('farmer_id', res.data[0].farmer_id)
          sessionStorage.setItem('account_type', res.data[0].account_type)
          this.login_form.reset();
          if (res.data[0].account_type == 'Admin') this.router.navigateByUrl('add-product');
          if (res.data[0].account_type == 'Farmer') this.router.navigateByUrl('farmer-dashboard');
          
        }
        if(res.status == 400){
          this.toastr.error(res.message)
        }
      })
    }else {
      this.toastr.warning("Login form not valid...")
    }
  }

  ngOnInit(): void {
  }

}
