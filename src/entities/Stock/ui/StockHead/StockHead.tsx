import {memo} from 'react';
import {StockTitle} from "./StockTitle/StockTitle";


export const StockHead = memo(() => {
    return (
        <>
            <StockTitle title={'#'}/>
            <StockTitle title={'Сектор'}/>
            <StockTitle title={'Тип ценной бумаги'}/>
            <StockTitle title={'Цена предложения на покупку'}/>
            <StockTitle title={'Объем предложения на покупку'}/>
            <StockTitle title={'Цена предложения на продажу'}/>
            <StockTitle title={'Объем предложения на продажу'}/>
            <StockTitle title={'Время последнего обновления данных'}/>
            <StockTitle title={'Цена последней сделки'}/>
            <StockTitle title={'Объем последней сделки'}/>
            <StockTitle title={'Время последней сделки'}/>
            <StockTitle title={'Объём торгов'}/>
        </>
    )
        ;
})
