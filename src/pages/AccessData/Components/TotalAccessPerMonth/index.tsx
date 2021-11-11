import Chart from "../../../../components/Chart";
import CustomChartTitle from "../../../../components/CustomChartTitle";
import * as S from "./styles";

const TotalAccessPerMonth = () => {
    const options: Highcharts.Options = {};
    return (
        <S.Wrapper>
            <CustomChartTitle
                description="Acompanhe a quantidade média de acesso por mês e dia nas páginas do ignite e do experts clubs"
                title="Total médio de acessos por mês nas páginas"
            />
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessPerMonth;
