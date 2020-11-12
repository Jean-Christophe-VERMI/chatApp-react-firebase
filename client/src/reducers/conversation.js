/* eslint-disable no-duplicate-case */
import { 
  SET_RECIPIENT_ID,
  SET_ROOM_NAME,
  STORE_RECIPIENT,
  STORE_CONVERSATION
} from '../actions/conversation';

import { LOGOUT } from '../actions/user';

export const initialState = {
  recipientName: "",
  recipientId : null,
  roomName : "",
  conversation: [],
};

const conversation = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPIENT_ID:
      return {
        ...state,
        recipientId: action.uid,
      };
    case SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.value,
      };
    case STORE_RECIPIENT:
      return {
        ...state,
        recipientId: action.uid,
      };
    case STORE_CONVERSATION:
      return {
        ...state,
        conversation: action.messages,
      };
    case LOGOUT:
      return {
        ...state,
        recipientId: initialState.recipientId,
      };
      default:
        return state;
  }
};
    
export default conversation;