const PUSH_APP_MESSAGE = 'queues/pushAppMessage';

export const pushAppMessage = message => ({
  type: PUSH_APP_MESSAGE,
  payload: message,
});

const initialState = { appMessages: [] };

function reducer(state = initialState, {type, payload}) {
  let newState;
  switch (type) {
    case PUSH_APP_MESSAGE:
      newState = Object.assign({}, state);
      const queueLen = newState.appMessages.length;
      const lastMsg = queueLen ? newState.appMessages[queueLen - 1] : { message: '' }
      const isNewMsg = payload.message !== lastMsg.message;
      isNewMsg && newState.appMessages.push(payload);
      return newState;
    default:
      return state;
  }
}

export default reducer;