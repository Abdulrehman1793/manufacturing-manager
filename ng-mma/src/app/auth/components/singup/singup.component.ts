import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import * as authActions from '../../store/auth.action';
import { AuthState, auth_loading } from '../../store';
import { AuthRequest } from '../../models';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  loading$ = of(false);

  form = this.fb.group({
    name: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    role: ['ADMIN', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {
    this.loading$ = store.select(auth_loading);
  }

  ngOnInit(): void {}

  singup() {
    if (this.form.valid) {
      const payload = this.form.value as AuthRequest;
      // this.store.dispatch(authActions.signin_request({ payload }));
    }
  }
}
