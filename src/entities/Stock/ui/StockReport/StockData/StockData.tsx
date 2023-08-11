import {FC, memo, ReactNode} from 'react';

interface IStockTitle {
    data: ReactNode
}

export const StockTitle: FC<IStockTitle> = memo(({
                                                     data
                                                 }) => {
    return (
        <td className="whitespace-nowrap px-6 py-4">{data}</td>
    );
});
