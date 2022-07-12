// @ts-nocheck
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @ViewChild('scrollMe')  myScrollContainer ?: ElementRef<any>  ; 
  constructor(public  SharedService_ : SharedService, private toastr: ToastrService, public fb: FormBuilder) { }

  previusChatsList : any
  chatHistory : any 
  selectedUser : any

  chat = this.fb.group({
    chat_content : ['', Validators.compose([Validators.required], [Validators.minLength(1)])]
  });

  currentUserId : any
  currentUserImg :any

  currentUserType : any
  




  ngOnInit(): void {
    this.currentUserType = sessionStorage.getItem('account_type')
    this.currentUserId = sessionStorage.getItem('currentUserId')
    this.getCurrentUserDetails()
    this.getProfileForChat()
    this.scrollToBottom()
  }

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }  
  }

  getCurrentUserDetails(){
    const body = {farmer_id : this.currentUserId}
    this.SharedService_.getFarmerDetails(body).subscribe((res :any) => {
      if (res['status'] == 200){
        this.currentUserImg = res.data[0]['farmer_img']
      }else{
        this.toastr.error('Something went wrong!')
      }
    }, (err :any) => {});
  }

  getProfileForChat(){
    const body = {  "get": this.currentUserType == 'Admin' ? ['Farmer', 'Seller'] : ['Admin'] }
    this.SharedService_.getProfileForChat(body).subscribe((res : any) =>{
      this.previusChatsList = res.data
      this.selectedUser = res.data[0]
      this.getChat()
    }, err =>{this.toastr.error(err.message)})
  }


  getChat(){
    const body = {  
      "sender_id": this.currentUserId,
      "receiver_id": this.selectedUser['farmer_id']
    }
    this.SharedService_.getChat(body).subscribe((res : any) =>{
      this.chatHistory = res.data
    }, err =>{this.toastr.error(err.message)})
  }

  sendChat(){
    const body = {  
      "chat_content" : this.chat.controls['chat_content'].value,
      "sender_id": this.currentUserId,
      "receiver_id": this.selectedUser['farmer_id']
    }
    if(this.chat.valid){
      this.SharedService_.sendChat(body).subscribe((res : any) =>{
        this.getChat()
        this.chat.reset()
        console.log(res)
      }, err =>{this.toastr.error(err.message)})
    }
  }

}
