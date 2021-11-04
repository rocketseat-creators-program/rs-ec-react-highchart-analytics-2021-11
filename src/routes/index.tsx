import { Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AccessData from "../pages/AccessData";

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            <Route path="/access-data" component={AccessData} />
            <Redirect from="/" to="access-data" />
        </Suspense>
    </BrowserRouter>
);

export default Routes;
