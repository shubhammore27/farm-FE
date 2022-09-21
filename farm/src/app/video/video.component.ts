import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  currentUserType : any
  videos = ["", '', "", '', "", ]

  constructor() { }

  ngOnInit(): void {
    this.currentUserType = sessionStorage.getItem('account_type')
  }

}
