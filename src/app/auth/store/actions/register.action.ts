import { createAction, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { RegisterRequest } from '../../types/register-request.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());

export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrors }>());
