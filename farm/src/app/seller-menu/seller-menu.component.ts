import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-menu',
  templateUrl: './seller-menu.component.html',
  styleUrls: ['./seller-menu.component.css']
})
export class SellerMenuComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('account_type')
    sessionStorage.removeItem('currentUserId')
    console.log(sessionStorage)
    this.router.navigate(['/login']);
  }

}
