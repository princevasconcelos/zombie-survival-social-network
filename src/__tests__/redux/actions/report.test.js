import {
  requestGetReports,
  requestReportFailed,
  requestReportSuccess,
  REQUEST_GET_REPORTS,
  REQUEST_REPORT_SUCCESS,
  REQUEST_REPORT_FAILED,
} from '../../../stores/reducers/report';

describe('Report actions', () => {
  it('should create an action when request reports', () => {
    const expectedAction = {
      type: REQUEST_GET_REPORTS,
    };

    expect(requestGetReports()).toEqual(expectedAction);
  });

  it('should create an action when request reports success', () => {
    const data = [];
    const expectedAction = {
      type: REQUEST_REPORT_SUCCESS,
      payload: data,
    };

    expect(requestReportSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action when request reports failure', () => {
    const expectedAction = {
      type: REQUEST_REPORT_FAILED,
    };

    expect(requestReportFailed()).toEqual(expectedAction);
  });
});
