import { PayloadAction } from "redux-starter-kit";

export interface CreateRequestBundleParams<DataType, actionRequestParams> {
  name: string;
  fetchBundle: (params?: actionRequestParams) => Promise<DataType>;
}

export interface CreateRequestBundleState<DataType> {
  error: string;
  loading: boolean;
  data: DataType | undefined;
}

interface CreateRequestBundleMutators<DataType> {
  pending: (state: CreateRequestBundleState<DataType>) => void;
  success: (
    state: CreateRequestBundleState<DataType>,
    action: PayloadAction<DataType>
  ) => void;
  failure: (
    state: CreateRequestBundleState<DataType>,
    action: PayloadAction<string>
  ) => void;
}
