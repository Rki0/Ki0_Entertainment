import { REGISTER_USER } from "../_actions/type";
import { registerUser } from "../_actions/user_action";

type StateType = {
  userData: object;
};

const initialState = {
  userData: {},
};

type UserActionType = ReturnType<typeof registerUser>;

export default function userReducer(
  state: StateType = initialState,
  action: UserActionType
) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };

    default:
      return state;
  }
}
