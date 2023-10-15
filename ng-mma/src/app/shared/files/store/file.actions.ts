// generic-form.actions.ts
import { createAction, props } from '@ngrx/store';
import { FileType } from '../models';

export const cache_file = createAction(
  '[File] Cache',
  props<{ id: number; base64: string; file: File; fileType: FileType }>()
);

export const file_save_request = createAction(
  '[File] Save request',
  props<{ file: File; fileType: FileType }>()
);
export const file_save_success = createAction(
  '[File] Save Success',
  props<{ id: number; file: File; fileType: FileType; size: number }>()
);
export const file_save_failure = createAction(
  '[File] Save Failure',
  props<{ error: string }>()
);
