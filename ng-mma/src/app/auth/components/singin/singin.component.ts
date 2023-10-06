import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState, auth_loading } from '../../store';
import * as authActions from '../../store/auth.action';
import { AuthRequest } from '../../models';
import { of } from 'rxjs';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  loading$ = of(false);

  form = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {
    this.loading$ = store.select(auth_loading);
  }

  ngOnInit(): void {}

  singin() {
    if (this.form.valid) {
      const payload = this.form.value as AuthRequest;
      this.store.dispatch(authActions.signin_request({ payload }));
    }
  }
}
