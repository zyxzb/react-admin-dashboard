import {Routes, Route, HashRouter} from "react-router-dom";
// HashRouter for GH PAGES
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./FormSource";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

//styles
import './style/dark.scss';

function App() {

    const {darkMode} = useContext(ThemeContext)



    return (
        <div className={darkMode ? 'app dark' : 'app'}>
            {/* <BrowserRouter> */}
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={< Home />}/>
                        <Route path="login" element={< Login />}/>
                        <Route>
                            <Route path="users">
                                <Route index element={< List />}/>
                                <Route path=":userId" element={< Single />}/>
                                <Route path="new" element={< New inputs={userInputs} title="Add New User"/>}/>
                            </Route>
                        </Route>
                        <Route>
                            <Route path="products">
                                <Route index element={< List />}/>
                                <Route path=":productId" element={< Single />}/>
                                <Route path="new" element={< New inputs={productInputs} title="Add New Product"/>}/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
                </HashRouter>
            {/* </BrowserRouter> */}
        </div>
    );
}

export default App;
