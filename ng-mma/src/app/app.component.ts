import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';

import { AuthState, auth_request } from './auth/store';
import { User } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$: Observable<User | null> = EMPTY;

  constructor(public title: Title, private store: Store<AuthState>) {
    store.dispatch(auth_request());
  }
}
