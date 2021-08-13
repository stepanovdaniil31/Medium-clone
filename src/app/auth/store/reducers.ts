import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../types/auth-state.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({ ...state, isSubmitting: true }))
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
