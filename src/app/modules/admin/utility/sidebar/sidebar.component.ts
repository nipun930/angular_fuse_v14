import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  // pushing only commit to origin 
  sideMenuLinks = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      logo: ''
    },
    {
      name: 'Profile',
      link: '/profile',
      logo: ''
    },
    {
      name: 'students',
      link: '/students',
      logo: ''
    },
    {
      name: 'Events',
      link: '/events',
      logo: ''
    },
  ]

  ngOnInit(): void {
  }

}
