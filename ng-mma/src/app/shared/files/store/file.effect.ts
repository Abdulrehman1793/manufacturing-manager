import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as FileActions from '../store/file.actions';
import { FilesService } from '../services/files.service';
import { FileType } from '../models';

@Injectable()
export class FilesEffects {
  constructor(private actions$: Actions, private _fileService: FilesService) {}

  // cacheRequest$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(FileActions.file_cache_request),
  //       switchMap(({ file, fileType }) => {
  //         return this._fileService.convertFileToBytes(file).pipe(
  //           map((bytes) =>
  //             FileActions.file_cache_success({
  //               bytes,
  //               fileType,
  //               size: file.size,
  //               id: 0,
  //             })
  //           )
  //         );
  //       }),
  //       catchError((error) => of(FileActions.file_cache_failure({ error })))
  //     ),
  //   { dispatch: false }
  // );

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
