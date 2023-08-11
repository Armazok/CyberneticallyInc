import cls from './PageLoader.module.css';
import {Loader} from "shared/ui/Loader/Loader";

export const PageLoader = () => (
    <div className={cls.Page__loader}>
        <Loader/>
    </div>
);
