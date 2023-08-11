import {FC, ReactNode, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {Reducer} from '@reduxjs/toolkit';
import {IReduxStoreWithManager, StateSchemaKey} from "../../../app/providers/StoreProvider/config/StateSchema";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}


interface IDynamicModuleLoader {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children?: ReactNode
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = ({
                                                                  children,
                                                                  reducers,
                                                                  removeAfterUnmount = true,
                                                              }) => {

    const store = useStore() as IReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};
