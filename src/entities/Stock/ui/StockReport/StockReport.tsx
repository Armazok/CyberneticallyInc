import {useSelector} from "react-redux";
import {getStockData} from "../../model/selectors/getStockData/getStockData";
import {StockHead} from "../StockHead/StockHead";
import {IStock} from "../../model/types/stockSchema";
import {useState} from "react";
import {Paginator} from "../../../../widgets/Paginator";

interface IStockReport {
    dataStock?: IStock
}

export const StockReport = ({}: IStockReport) => {
    const dataStock = useSelector(getStockData);
    const itemsPerPage = 10; // Количество элементов на странице

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    // Вычисляем индексы начала и конца среза данных для текущей страницы
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const indexStyles = [
        {index: 1, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/first_iii.png'},
        {index: 2, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/second_iii.png'},
        {index: 3, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/third_iii.png'},
    ];


    return (
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
                                            <td className="whitespace-nowrap px-6 py-4">{el.symbol}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{el.securityType}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{el.lastUpdated}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{el.lastSaleSize}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{el.lastSaleTime}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Paginator
                totalPages={Math.ceil((dataStock?.length || 0) / itemsPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
