export const SET_RECIPIENT_ID = 'SET_RECIPIENT_ID';
export const SET_ROOM_NAME = 'SET_ROOM_NAME';
export const STORE_RECIPIENT = 'STORE_RECIPIENT';
export const FETCH_CONVERSATION = 'FETCH_CONVERSATION';
export const STORE_CONVERSATION = 'STORE_CONVERSATION';

export const setRecipientId = (uid) => ({
  type : SET_RECIPIENT_ID,
  uid,
});

export const setRoomName = (value) => ({
  type : SET_ROOM_NAME,
  value
});

export const storeRecipient = (uid) => ({
  type : STORE_RECIPIENT,
  uid,
});

export const fetchConversation = () => ({
  type : FETCH_CONVERSATION,
});

export const storeConversation = (messages) => ({
  type : STORE_CONVERSATION,
  messages,
});