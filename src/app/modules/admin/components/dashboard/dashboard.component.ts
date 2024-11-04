import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allUserData = [];
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getUserData().subscribe(res => {
      console.log('getUserData', res);
      this.allUserData = res;
    });
  }

}
