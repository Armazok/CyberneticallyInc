import {memo, useEffect} from "react";
import {fetchStockData} from "../../../entities/Stock";
import cls from './StockPage.module.css'
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "../../../shared/lib/components/DynamicModuleLoader";
import {stockReducer} from "../../../entities/Stock/model/slice/stockSlice";
import {StockReport} from "../../../entities/Stock/ui/StockReport/StockReport";


const reducers: ReducersList = {
    stock: stockReducer,
};

const StockPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchStockData('pk_0b3a74ceb4ca4714ba597cffb907f126'))
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.StockPage}>
                <StockReport/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(StockPage);

