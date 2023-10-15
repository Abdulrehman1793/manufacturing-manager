import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FileActions from '../store/file.actions';
import { FilesService } from '../services/files.service';

@Injectable()
export class FilesEffects {
  constructor(private actions$: Actions, private _fileService: FilesService) {}

  upload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FileActions.file_save_request),
      switchMap(({ file, fileType }) =>
        this._fileService.uploadImage(file).pipe(
          map((data) =>
            FileActions.file_save_success({
              file,
              fileType,
              id: 1,
              size: file.size,
            })
          ),
          catchError((error) =>
            of(
              FileActions.file_save_failure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
