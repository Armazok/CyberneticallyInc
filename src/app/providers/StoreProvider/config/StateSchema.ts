import {AxiosInstance} from "axios";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {IStockSchema} from "../../../../entities/Stock/model/types/stockSchema";

export interface IStateSchema {

    // Ассинхронные редюсеры
    stock?: IStockSchema
}

export type StateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IThunkExtraArg {
    api: AxiosInstance
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
    state: IStateSchema
}
