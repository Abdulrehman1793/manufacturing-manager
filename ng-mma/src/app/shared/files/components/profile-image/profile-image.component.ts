import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FileState, file_cache_request, file_save_request } from '../../store';
import { FileType } from '../../models';
import { FilesService } from '../../services/files.service';

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
  constructor(
    private _store: Store<FileState>,
    private _fileService: FilesService
  ) {}

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
      if (file != null) {
        this._fileService.fileToBase64(file).then((base64) => {
          this._store.dispatch(
            file_cache_request({ base64, file, fileType: FileType.image })
          );
        });
      }
      // this._store.dispatch(
      //   file_cache_request({ file, fileType: FileType.image })
      // );
    }
  }
}
