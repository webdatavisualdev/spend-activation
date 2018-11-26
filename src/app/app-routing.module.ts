import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ReferralCodeComponent } from './referral-code/referral-code.component';

export const routes = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'referral-code', component: ReferralCodeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
