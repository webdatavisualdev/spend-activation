import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ActivateComponent } from './activate/activate.component';

export const routes = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'activate', component: ActivateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
