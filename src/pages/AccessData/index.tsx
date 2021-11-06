import Header from "../../components/Header";
import { AnalyticsDataContextProvider } from "../../context/AnalyticsData/indext";
import * as S from "./styles";

const AccessData = () => (
    <AnalyticsDataContextProvider>
        <Header />
        <S.Content />
    </AnalyticsDataContextProvider>
);

export default AccessData;
