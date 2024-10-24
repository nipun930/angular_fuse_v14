import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './utility/sidebar/sidebar.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { EventsComponent } from './components/events/events.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // BrowserModule
  ],
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StudentsComponent,
    EventsComponent,
  ]
})
export class AdminModule { }
