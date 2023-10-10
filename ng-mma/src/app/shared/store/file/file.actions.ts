// generic-form.actions.ts
import { createAction, props } from '@ngrx/store';
import { FileType } from './file.state';

export const file_save_request = createAction(
  '[File] Save request',
  props<{ file: File; fileType: FileType }>()
);
export const fiel_save_success = createAction(
  '[File] Save Success',
  props<{ id: number; file: File; fileType: FileType; size: number }>()
);
export const file_save_failure = createAction(
  '[File] Save Failure',
  props<{ error: string }>()
);
