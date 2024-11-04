import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  userOptionCss = "floating-profile-options d-none";

  @ViewChild('profileOptions') profileOptions: ElementRef;

  ngOnInit(): void {
  }

  toggleProfileOptions(){
    console.log(this.profileOptions.nativeElement.style);
    this.userOptionCss = (this.userOptionCss=="floating-profile-options")?"floating-profile-options d-none":"floating-profile-options";
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
