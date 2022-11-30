import { StamEntityWhereInput } from "./StamEntityWhereInput";
import { StamEntityOrderByInput } from "./StamEntityOrderByInput";

export type StamEntityFindManyArgs = {
  where?: StamEntityWhereInput;
  orderBy?: Array<StamEntityOrderByInput>;
  skip?: number;
  take?: number;
};
