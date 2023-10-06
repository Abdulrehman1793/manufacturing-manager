import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store';
import * as authActions from '../../store/auth.action';
import { AuthPayload } from '../../models';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  form = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {}

  ngOnInit(): void {}

  singin() {
    if (this.form.valid) {
      const payload = this.form.value as AuthPayload;
      this.store.dispatch(authActions.signin_request({ payload }));
    }
  }
}
