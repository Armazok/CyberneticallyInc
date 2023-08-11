import {FC, memo} from 'react';

interface IStockTitle {
    title: string
}

export const StockTitle: FC<IStockTitle> = memo(({
                                                     title
                                                 }) => {
    return (
        <th scope="col" className="px-6 py-4">{title}</th>
    );
});
