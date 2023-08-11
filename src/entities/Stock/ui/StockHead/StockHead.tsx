import {memo} from 'react';
import {StockTitle} from "./StockTitle/StockTitle";


export const StockHead = memo(() => {
    return (
        <thead className="border-b font-medium dark:border-neutral-500 text-center">
        <tr>
            <StockTitle title={'#'}/>
            <StockTitle title={'Тикер'}/>
            <StockTitle title={'Цена последней продажи'}/>
            <StockTitle title={'Тип ценной бумаги'}/>
            <StockTitle title={'Последнее обновление'}/>
            <StockTitle title={'Размер последней продажи'}/>
            <StockTitle title={'Цена последней продажи'}/>
            <StockTitle title={'Время последней продажи'}/>
        </tr>
        </thead>
    );
})
