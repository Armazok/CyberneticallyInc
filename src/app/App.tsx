import '../App.css';
import {Suspense} from "react";
import {PageLoader} from "widgets/PageLoader";
import {StockPage} from "pages/StockPage";

function App() {
    return (
        <div className="App__container">
            <Suspense fallback={<PageLoader/>}>
                <div className="wrapper">
                    <StockPage/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;






