import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AccessData from "../pages/AccessData";

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            <Route path="/access-data" component={AccessData} />
        </Suspense>
    </BrowserRouter>
);

export default Routes;
