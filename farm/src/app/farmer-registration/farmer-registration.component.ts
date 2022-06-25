import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {

  private fb: FormBuilder = new FormBuilder()
  isSendOTPVisible = true;
  disableCreatorEmail: boolean = false;
  otpLabel = "Send OTP"
  VerifyLabel = "Verify"



  // Create User Form
  createUser = this.fb.group({
    farmer_name: ['yyyyyyyyyyyyyyyyyy', Validators.compose([Validators.required, Validators.minLength(10)])],
    farmer_address: ['yyyyyyyyyyyyyyy', Validators.compose([Validators.required, Validators.minLength(10)])],
    farmer_phone: ['9999999999', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    farmer_email: ['shubham.more26@gmail.com', Validators.compose([Validators.required, Validators.email])],
    farmer_password: ['123123', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: ['123123', Validators.compose([Validators.required, Validators.minLength(6)])],
    otp: ['1233', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern("^[0-9]*$")])],
    otpStatus: ['verified', Validators.required],
  })

  verifyEmail() {
    this.SharedService_.verifyEmail({ 'email': this.createUser.controls['farmer_email'].value, otp: this.createUser.controls['otp'].value }).subscribe(
      (res : any) => {
        if (res['status'] == 200) {
          this.VerifyLabel = 'Verified'
          this.createUser.controls['otpStatus'].setValue('verified')
          this.toastr.success("Verified")
        } else {
          this.createUser.controls['otp'].setValue('')
          this.createUser.controls['otp'].invalid
          this.disableCreatorEmail = true;
          this.createUser.controls['otpStatus'].setValue('')
          this.toastr.error("Invalid")
        }
      }, error => {
        this.VerifyLabel = "Verify"
        this.toastr.error(error)
        console.log(error)
      })
  }

  onSubmit() {
    let body = {
      "farmer_name": this.createUser.controls['farmer_name'].value,
      "farmer_address": this.createUser.controls['farmer_address'].value,
      "farmer_phone": this.createUser.controls['farmer_phone'].value,
      "farmer_email": this.createUser.controls['farmer_email'].value,
      "farmer_password": this.createUser.controls['farmer_password'].value,
    }
    this.SharedService_.farmer_registration(body).subscribe(
      (res :any ) => {
        if (res['status'] == 200) {
          this.toastr.success(res.message);
          console.log("res", res)
          this.createUser.reset()
        }else {
          this.toastr.error(res.message);
          console.log("res", res)
        }
      }, error => {
        this.toastr.error(error.message);
        console.log(error)
      }

    )
  }

  sendOTP() {
    this.disableCreatorEmail = true;
    let body = { 'email': this.createUser.controls['farmer_email'].value }
    this.otpLabel = "Sending" 
    if (this.createUser.controls['farmer_email'].valid) {
      this.SharedService_.sendOTP(body).subscribe(
        (res : any) => {
          this.toastr.success(res.message);
          this.isSendOTPVisible = false;
          console.log(res)
        },
        (error : any) => {
          this.toastr.error(error.message);
          console.log(error)
        }
      )

    } else {
      this.isSendOTPVisible = true;
    }
  }

  constructor(private SharedService_: SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
