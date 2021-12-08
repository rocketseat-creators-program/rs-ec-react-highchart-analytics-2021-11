import Chart from "../../../../components/Chart";
import * as S from "./styles";

export const TotalAccessOnPages = () => {
    const options: Highcharts.Options = {};

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessOnPages;
