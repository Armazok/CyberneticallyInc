import {IStateSchema} from "app/providers/StoreProvider/config/StateSchema";

export const getStockError = (state: IStateSchema) => state.stock?.error;
