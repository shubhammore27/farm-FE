import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/Services/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  previusChatsList : any
  chatHistory : any 
  selectedUser : any
  chat_content = new FormControl()
  currentUserId : any

  constructor(public  SharedService_ : SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentUserId = sessionStorage.getItem('currentUserId')
    this.getProfileForChat()
  }

  getProfileForChat(){
    const body = {  "get": sessionStorage.getItem('account_type') == 'Admin' ? 'Farmer' : 'Admin' }
    this.SharedService_.getProfileForChat(body).subscribe((res : any) =>{
      this.previusChatsList = res.data
      this.selectedUser = res.data[0]
      console.log (this.selectedUser)
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
      "chat_content" : this.chat_content.value,
      "sender_id": this.currentUserId,
      "receiver_id": this.selectedUser['farmer_id']
    }
    if(this.chat_content.valid){
      this.SharedService_.sendChat(body).subscribe((res : any) =>{
        this.getChat()
        this.chat_content.reset()
        console.log(res)
      }, err =>{this.toastr.error(err.message)})
    }
  }

}
