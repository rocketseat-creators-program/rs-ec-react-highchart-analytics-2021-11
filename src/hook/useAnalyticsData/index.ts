import { useContext } from "react";
import AnalyticsDataContext from "../../context/AnalyticsData/indext";

const useAnalyticsData = () => {
    const context = useContext(AnalyticsDataContext);
    return context;
};

export default useAnalyticsData;
