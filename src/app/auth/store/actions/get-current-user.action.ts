import { createAction, props } from "@ngrx/store";
import { CurrentUser } from "src/app/shared/types/current-user.interface";
import { ActionTypes } from "../actionTypes";

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(ActionTypes.GET_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);