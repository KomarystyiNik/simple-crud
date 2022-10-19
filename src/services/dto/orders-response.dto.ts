export interface ProcessError {
  errorMessage: string;
  status: number | null;
}

export interface Response<T> {
  data?: T;
  error?: ProcessError;
}

export interface IOrderDescription {
  title: string,
  body: string,
}

export interface IOrder extends IOrderDescription{
  userID: number,
  id: number,
}
