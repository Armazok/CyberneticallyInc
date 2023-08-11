import {useSelector} from "react-redux";
import {getStockData} from "../../model/selectors/getStockData/getStockData";
import {StockHead} from "../StockHead/StockHead";
import {IStock} from "../../model/types/stockSchema";

interface IStockReport {
    dataStock?: IStock
}

export const StockReport = ({}: IStockReport) => {
    const dataStock = useSelector(getStockData)

    const indexStyles = [
        { index: 1, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/first_iii.png' },
        { index: 2, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/second_iii.png' },
        { index: 3, url: 'https://bin.bnbstatic.com/image/julia/nft/marketplace/third_iii.png' },
    ];




    return (
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500 text-center">
            <tr>
                <StockHead/>
            </tr>
            </thead>
            <tbody className="text-center">
            {
                dataStock?.slice(0, 10).map((el, index) => {
                    const indexStyle = indexStyles.find(style => style.index === index + 1);

                    return (
                        <tr
                            key={index}
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
                                ) : index + 1}
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
    );
}
