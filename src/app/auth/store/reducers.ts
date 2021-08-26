import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../types/auth-state.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action';

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
