import { TooltipFormatterContextObject } from "highcharts";
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
                data: analyticsDataState.totalAccessOnPagesByMonth?.months || [
                    [1604199600000, 0],
                ],
            },
        ],

        legend: {
            enabled: false,
        },

        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;
                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}</h1>
                <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}"> Acessos no mês</span>
                </div>`;
            },
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
