export declare namespace Services {
  export type Response<T = unknown> = T
  export interface Response2<T = unknown> {
    code: number;
    obj: Partial<T>;
    msg: string;
  }
}