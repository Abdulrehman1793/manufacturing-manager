import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FileState, file_save_request } from '../../store';
import { FileType } from '../../models';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileImageComponent),
      multi: true,
    },
  ],
})
export class ProfileImageComponent implements ControlValueAccessor {
  constructor(private _store: Store<FileState>) {}

  @Input() placeholder: string = '';

  private innerValue: string = '';

  get value(): string {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
    console.log(v);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.innerValue = value;
    }
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  onUploadFiles(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files) {
      const file = inputElement.files.item(0);
      if (file != null)
        this._store.dispatch(
          file_save_request({ file, fileType: FileType.image })
        );
    }
  }
}
