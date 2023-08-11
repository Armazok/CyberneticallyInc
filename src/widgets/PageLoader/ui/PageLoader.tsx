import cls from './PageLoader.module.css';
import {Loader} from "../../../shared/ui/Loader/Loader";

interface IPageLoader {
    lazyLoad?: boolean
    fetchData?: boolean
}
export const PageLoader = ({
                               fetchData,
                               lazyLoad
}: IPageLoader) => (
    <div className={cls.Page__loader}>
        {lazyLoad && <p className='text-blue-600 text-5xl uppercase'>Lazy</p>}
        {fetchData && <p className='text-emerald-500 text-5xl uppercase'>Fetch</p>}
        <Loader/>
    </div>
);
