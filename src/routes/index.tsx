import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback="carregando...">
            <Route path="/home" component={Home} />
        </Suspense>
    </BrowserRouter>
);

export default Routes;
