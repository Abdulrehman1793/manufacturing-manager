import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { auth_request } from './auth/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public title: Title, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(auth_request());
  }
}
