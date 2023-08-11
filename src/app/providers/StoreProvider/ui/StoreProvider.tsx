import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {IStateSchema} from "../config/StateSchema";
import {createReduxStore} from "../config/store";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;


    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
