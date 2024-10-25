import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './modules/admin/components/profile/profile.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
