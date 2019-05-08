import {
  REQUEST_TRANSACTION,
  REQUEST_TRANSACTION_DONE,
  requestTransaction,
  requestTransactionDone,
} from '../../../stores/reducers/transaction';

describe('Transaction actions', () => {
  it('should create an action when request transactions', () => {
    const expectedAction = {
      type: REQUEST_TRANSACTION,
    };
    expect(requestTransaction()).toEqual(expectedAction);
  });

  it('should create an action when transactions success', () => {
    const expectedAction = {
      type: REQUEST_TRANSACTION_DONE,
    };
    expect(requestTransactionDone()).toEqual(expectedAction);
  });
});
