import { createFeatureSelector } from '@ngrx/store';
import { ConfirmationState } from './confirmation.state';

export const CONFIRMATION_STATE_NAME = 'confirmation';

const state = createFeatureSelector<ConfirmationState>(CONFIRMATION_STATE_NAME);
