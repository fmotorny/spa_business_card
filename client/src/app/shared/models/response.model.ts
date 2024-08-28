export interface ResponseModel {
  status: ResponseStatusEnum;
  message: string;
}
export enum ResponseStatusEnum {
  success = 'SUCCESS',
  error = 'ERROR'
}
