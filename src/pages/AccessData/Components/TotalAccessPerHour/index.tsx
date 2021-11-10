import Chart from "../../../../components/Chart";
import * as S from "./styles";

const TotalAccessPerHour = () => {
    const options: Highcharts.Options = {};
    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessPerHour;
