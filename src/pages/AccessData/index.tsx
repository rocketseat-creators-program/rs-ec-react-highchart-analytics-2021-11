import Header from "../../components/Header";
import { AnalyticsDataContextProvider } from "../../context/AnalyticsData/indext";
import * as S from "./styles";
import * as C from "./Components";

const AccessData = () => (
    <AnalyticsDataContextProvider>
        <Header />
        <S.Content>
            <C.TotalAccessOnPages />
            <C.PorcentageOfAccessOnPages />
            <C.TotalAccessPerHour />
            <C.TotalAccessPerMonth />
        </S.Content>
    </AnalyticsDataContextProvider>
);

export default AccessData;
