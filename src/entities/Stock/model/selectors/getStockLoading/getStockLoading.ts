import {IStateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema";

export const getStockLoading = (state: IStateSchema) => state.stock?.isLoading;
