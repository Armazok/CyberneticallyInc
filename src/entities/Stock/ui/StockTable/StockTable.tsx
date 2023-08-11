import {StockReport} from "../StockReport/StockReport";

interface IStockTable {
}

export const StockTable = ({}: IStockTable) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <StockReport/>
                    </div>
                </div>
            </div>
        </div>
    );
};



