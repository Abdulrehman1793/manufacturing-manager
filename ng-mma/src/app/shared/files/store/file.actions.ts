// generic-form.actions.ts
import { createAction, props } from '@ngrx/store';
import { FileType } from '../models';

export const file_cache_request = createAction(
  '[File] Cache request',
  props<{ base64: string; file: File; fileType: FileType }>()
);
export const file_cache_success = createAction(
  '[File] Cache Save success',
  props<{ id: number; bytes: Uint8Array; fileType: FileType; size: number }>()
);
export const file_cache_failure = createAction(
  '[File] Save Failure',
  props<{ error: string }>()
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
