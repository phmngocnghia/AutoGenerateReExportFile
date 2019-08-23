import { CreateRequestBundleState, CreateRequestBundleParams } from "@utils";

import { PayloadAction } from "redux-starter-kit";
export type Input = CreateRequestBundleParams<string>;

export interface OutputActions<T> {
  pending: PayloadAction<void>;
  success: PayloadAction<T>;
  failure: PayloadAction<string>;
}

export interface OutputStates<T> {
  initial: CreateRequestBundleState<T>;
  pending: CreateRequestBundleState<T>;
  success: CreateRequestBundleState<T>;
  failure: CreateRequestBundleState<T>;
}
