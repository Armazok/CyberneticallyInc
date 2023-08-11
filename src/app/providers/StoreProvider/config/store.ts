import {CombinedState, configureStore, Reducer, ReducersMapObject,} from '@reduxjs/toolkit';
import {$api} from '../../../../shared/api/api';
import {createReducerManager} from "../../../../app/providers/StoreProvider/config/reducerManager";
import {IStateSchema, IThunkExtraArg} from "./StateSchema";

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {

    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
    };

    const reducerManager = createReducerManager(rootReducer);
    const extraArgs: IThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
