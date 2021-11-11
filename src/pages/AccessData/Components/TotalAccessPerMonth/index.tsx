import Chart from "../../../../components/Chart";
import CustomChartTitle from "../../../../components/CustomChartTitle";
import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import * as S from "./styles";

const TotalAccessPerMonth = () => {
    const { analyticsDataState } = useAnalyticsData();
    const options: Highcharts.Options = {
        title: {
            text: "",
        },

        xAxis: {
            type: "datetime",

            title: {
                text: "",
            },

            tickmarkPlacement: "on",
            alignTicks: true,
            labels: {
                format: "{value: %b}",
            },
        },

        yAxis: {
            title: {
                text: "",
            },
        },

        series: [
            {
                type: "column",
                name: "Total médio de acessos",
                color: AnalyticsColors.purple,
                data: analyticsDataState.totalAccessOnPagesByMonth?.months,
            },
        ],

        legend: {
            enabled: false,
        },
    };
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
