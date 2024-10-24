import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

export const appRoutes: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: ()=>import('app/modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }

];
