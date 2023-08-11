import {IStateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema";

export const getStockData = (state: IStateSchema) => state.stock?.data;
