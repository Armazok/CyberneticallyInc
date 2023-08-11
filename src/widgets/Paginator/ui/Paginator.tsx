import {memo} from "react";
import {Button} from "../../../shared/ui/Button/Button";

interface IPaginator {
    totalPages: number
    currentPage: string | number
    onPageChange: (currentPage: number) => void
}

export const Paginator = memo(({totalPages, currentPage, onPageChange}: IPaginator) => (
    <div>
        <Button
            textBtn={'Prev'}
            onClickHandler={() => onPageChange(+currentPage - 1)}
            disabled={currentPage === 1}
        />
        <span className="text-sky-50"> {currentPage} / {totalPages} </span>
        <Button
            textBtn={'Next'}
            onClickHandler={() => onPageChange(+currentPage + 1)}
            disabled={currentPage === totalPages}
        />
    </div>
));
