import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-menu',
  templateUrl: './farmer-menu.component.html',
  styleUrls: ['./farmer-menu.component.css']
})
export class FarmerMenuComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear()
    console.log(sessionStorage)
    this.router.navigate(['/login']);
  }
}
