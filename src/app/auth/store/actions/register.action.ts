import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../../types/register-request.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequest>()
);
