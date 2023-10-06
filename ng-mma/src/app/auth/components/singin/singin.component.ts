import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  form = this.fb.group({
    userName: '',
    password: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
