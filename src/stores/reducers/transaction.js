const REQUEST_TRANSACTION = 'REQUEST_TRANSACTION';
const REQUEST_TRANSACTION_DONE = 'REQUEST_TRANSACTION_DONE';

const INITIAL_STATE = {
  loading: false,
};

export const requestTransaction = () => ({
  type: REQUEST_TRANSACTION,
});

export const requestTransactionDone = () => ({
  type: REQUEST_TRANSACTION_DONE,
});

const transactionReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case REQUEST_TRANSACTION:
      return {
        loading: true,
      };
    case REQUEST_TRANSACTION_DONE:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default transactionReducer;
