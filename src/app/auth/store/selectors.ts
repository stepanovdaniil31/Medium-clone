import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/types/app-state.interface';
import { AuthState } from '../types/auth-state.interface';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
 );
