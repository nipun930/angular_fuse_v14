import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  // pushing only commit to origin 
  // pushing change from dev to origin dev **cherrypick changes**
  // pushing change from dev to origin dev **cherrypick changes second time **
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
