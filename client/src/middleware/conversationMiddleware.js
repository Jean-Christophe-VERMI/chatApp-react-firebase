import app, { db, storage } from "../../firebase";

import {
  FETCH_CONVERSATION,
  storeConversation,
} from '../actions/conversation';

const conversationMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_CONVERSATION: {
      const user = store.getState().user.currentUser;
      const recipient = store.getState().conversation.recipientId;
      // get conversation from storage
      // if no conversation create conv 

      store.dispatch(storeConversation())
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default conversationMiddleware;