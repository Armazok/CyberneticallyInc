import { lazy } from 'react';

export const StockPageAsync = lazy(() => new Promise((res) => setTimeout(
    () =>
        // @ts-ignore
        res(import('./StockPage')),
    1000,
)));
