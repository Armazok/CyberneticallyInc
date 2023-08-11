import {useSelector} from "react-redux";
import {getStockData} from "../../model/selectors/getStockData/getStockData";
import {StockHead} from "../StockHead/StockHead";
import {IStock} from "../../model/types/stockSchema";
import {getStockLoading} from "../../../../entities/Stock/model/selectors/getStockLoading/getStockLoading";
import {getStockError} from "../../../../entities/Stock/model/selectors/getLoadingError/getLoadingsError";
import {Text} from "../../../../shared/ui/Text/Text";
import {PageLoader} from "../../../../widgets/PageLoader";
import {Paginator} from "../../../../widgets/Paginator";
import {Fragment, useCallback, useState} from "react";
import {StockTitle} from "../../../../entities/Stock/ui/StockReport/StockData/StockData";

interface IStockReport {
    dataStock?: IStock
    startIndex?: number
    endIndex?: number
}

export const StockReport = ({}: IStockReport) => {

    const indexStyles = [
        {index: 1, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/first_iii.png'},
        {index: 2, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/second_iii.png'},
        {index: 3, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/third_iii.png'},
    ];

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = useCallback((newPage: number) => {
        setCurrentPage(newPage);
    }, []);

    function formatTimestamp(timestamp: number) {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Форматирует дату и время в человеко-читаемый вид
    }

    // Вычисляем индексы начала и конца среза данных для текущей страницы
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const dataStock = useSelector(getStockData);
    const isLoading = useSelector(getStockLoading)
    const error = useSelector(getStockError)


    let content;
    if (isLoading) {
        content = (
            <PageLoader fetchData={true}/>
        );
    } else if (error) {
        content = (
            <Text
                title={'Произошла ошибка при загрузке статьи'}
            />
        );
    } else {
        content = (
            <>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500 text-center">
                                    <tr>
                                        <StockHead/>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {
                                        dataStock?.slice(startIndex, endIndex).map((el: any, indexOnPage: number) => {
                                            const dataIndex = startIndex + indexOnPage; // Общий индекс элемента данных
                                            const indexStyle = indexStyles.find(style => style.index === dataIndex + 1); // +1 потому что индексы начинаются с 1
                                            return (
                                                <tr
                                                    key={indexOnPage}
                                                    className="
                                                   border-b transition
                                                   duration-300 ease-in-out
                                                    hover:bg-neutral-100
                                                    hover:text-sky-50
                                                     dark:border-neutral-500
                                                    dark:hover:bg-neutral-600
                                                    "
                                                >
                                                    <td className={`whitespace-nowrap px-6 py-4 font-medium`}>
                                                        {indexStyle ? (
                                                            <img
                                                                src={indexStyle.url}
                                                                alt={`Изображение для индекса ${indexStyle.index}`}
                                                                width={30}
                                                                height={30}
                                                            />
                                                        ) : dataIndex + 1}
                                                    </td>
                                                    <StockTitle data={el.symbol}/>
                                                    <StockTitle data={el.sector}/>
                                                    <StockTitle data={el.bidPrice}/>
                                                    <StockTitle data={el.bidSize}/>
                                                    <StockTitle data={el.askPrice}/>
                                                    <StockTitle data={el.askSize}/>
                                                    <StockTitle data={formatTimestamp(el.lastUpdated)}/>
                                                    <StockTitle data={el.lastSalePrice}/>
                                                    <StockTitle data={el.lastSaleSize}/>
                                                    <StockTitle data={formatTimestamp(el.lastSaleTime)}/>
                                                    <StockTitle data={el.volume}/>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                <Paginator
                                    totalPages={Math.ceil((dataStock?.length || 0) / itemsPerPage)}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }


    return (
        <Fragment>
            {content}
        </Fragment>
    );
}
