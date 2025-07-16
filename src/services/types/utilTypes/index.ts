// Types for fetch

export const enum ResponseStatus {
  Success = 'success',
  Failed = 'failed',
}

export interface IFailedResponse {
  isSuccess: false;
  statusCode: number;
  status: ResponseStatus.Failed;
  errorMessage: string;
}

export interface ISuccessResponse<T> {
  isSuccess: true;
  statusCode: number;
  status: ResponseStatus.Success;
  data: T;
}
