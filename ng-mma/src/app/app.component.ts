import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';

import { AuthState, auth_request, auth_user, auth_loading } from './auth/store';
import { User } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$: Observable<User | null> = EMPTY;
  loading$ = of(false);

  constructor(public title: Title, private store: Store<AuthState>) {
    store.dispatch(auth_request());
  }

  ngOnInit(): void {
    this.user$ = this.store.select(auth_user);
    this.loading$ = this.store.select(auth_loading);
  }
}
