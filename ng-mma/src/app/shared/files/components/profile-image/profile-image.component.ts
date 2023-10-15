import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FileState, fileById, cache_file } from '../../store';
import { FileType, IFile } from '../../models';
import { FilesService } from '../../services/files.service';
import { EMPTY, Observable } from 'rxjs';

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
  file$: Observable<IFile> = EMPTY;

  currentTimestamp: number = new Date().getTime();

  constructor(
    private _store: Store<FileState>,
    private _fileService: FilesService
  ) {
    this.file$ = _store.select(fileById(this.innerValue));
  }

  @Input() placeholder: string = '';

  private innerValue: number = -this.currentTimestamp;

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    if (value !== undefined) {
      if (value === 0) {
        this.innerValue = -this.currentTimestamp;
      } else {
        this.innerValue = value;
      }
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
            cache_file({
              id: this.innerValue,
              base64,
              file,
              fileType: FileType.image,
            })
          );
        });
      }
    }
  }
}
