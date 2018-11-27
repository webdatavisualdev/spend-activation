import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.form = _fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  ngOnInit() {
  }

  signin() {
    if (this.form.valid) {
      this._auth.login(this.form.value).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem('accessToken', res.data.accessToken);
          this._router.navigate(['activate']);
        }
      });
    }
  }
}
