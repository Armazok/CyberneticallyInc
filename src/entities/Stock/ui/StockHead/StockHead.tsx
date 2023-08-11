import {memo} from 'react';
import {StockTitle} from "./StockTitle/StockTitle";


export const StockHead = memo(() => {
    return (
        <>
            <StockTitle title={'#'}/>
            <StockTitle title={'Тикер'}/>
            <StockTitle title={'Цена последней продажи'}/>
            <StockTitle title={'Тип ценной бумаги'}/>
            <StockTitle title={'Последнее обновление'}/>
            <StockTitle title={'Размер последней продажи'}/>
        </>
    )
        ;
})
