import { StamEntity as TStamEntity } from "../api/stamEntity/StamEntity";

export const STAMENTITY_TITLE_FIELD = "id";

export const StamEntityTitle = (record: TStamEntity): string => {
  return record.id || record.id;
};
