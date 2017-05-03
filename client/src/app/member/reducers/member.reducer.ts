import { ActionReducer, Action } from '@ngrx/store';

export const MemberAction = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

export function memberReducer(state: boolean, action: Action) {
  switch (action.type) {
    case MemberAction.LOGIN:
      return true;
    case MemberAction.LOGOUT:
      return false;
  }
}
