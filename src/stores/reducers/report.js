export const REQUEST_GET_REPORTS = 'REQUEST_GET_REPORTS';
export const REQUEST_REPORT_SUCCESS = 'REQUEST_REPORT_SUCCESS';
export const REQUEST_REPORT_FAILED = 'REQUEST_REPORT_FAILED';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const requestGetReports = () => ({
  type: REQUEST_GET_REPORTS,
});

export const requestReportFailed = () => ({
  type: REQUEST_REPORT_FAILED,
});

export const requestReportSuccess = payload => ({
  type: REQUEST_REPORT_SUCCESS,
  payload,
});

const reportReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case REQUEST_GET_REPORTS:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REQUEST_REPORT_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reportReducer;
