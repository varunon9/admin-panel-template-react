export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const showToastMessage = (payload) => {
  return {
    type: SHOW_MESSAGE,
    payload
  };
};
