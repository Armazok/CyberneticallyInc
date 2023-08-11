import {memo, useCallback, useEffect, useState} from "react";
import {Paginator} from "../../../widgets/Paginator";
import {fetchStockData} from "../../../entities/Stock";
import cls from './StockPage.module.css'
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getStockData} from "../../../entities/Stock/model/selectors/getStockData/getStockData";
import {DynamicModuleLoader, ReducersList} from "../../../shared/lib/components/DynamicModuleLoader";
import {stockReducer} from "../../../entities/Stock/model/slice/stockSlice";
import {StockReport} from "../../../entities/Stock/ui/StockReport/StockReport";


const reducers: ReducersList = {
    stock: stockReducer,
};

const StockPage = () => {
    const dispatch = useAppDispatch()
    const dataStock = useSelector(getStockData)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Количество отчетов на странице
    const totalPages = dataStock && dataStock.length > 0 ? Math.ceil(dataStock.length / itemsPerPage) : 0;

    const handlePageChange = useCallback((newPage: any) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }, [totalPages]);


    useEffect(() => {
        dispatch(fetchStockData('pk_0b3a74ceb4ca4714ba597cffb907f126'))
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.StockPage}>
                <StockReport/>
            </div>

            <div className={cls.Paginator}>
                <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(StockPage);

