import { TooltipFormatterContextObject } from "highcharts";
import Chart from "../../../../components/Chart";
import { AnalyticsColors } from "../../../../constants";
import * as S from "./styles";

const PorcentageOfAccessOnPages = () => {
    const options: Highcharts.Options = {
        title: {
            text: "Porcentagem de acessos nas páginas",
            useHTML: true,
            style: {
                fontSize: "20px",
                color: AnalyticsColors.black,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Inter",
                padding: "20px",
            },
        },

        chart: {
            type: "pie",
        },

        series: [
            {
                type: "pie",
                innerSize: "60%",
                data: [
                    {
                        x: 30,
                        y: 300,
                        color: AnalyticsColors.ecWine,
                        name: "Experts Club",
                    },
                    {
                        x: 70,
                        y: 700,
                        color: AnalyticsColors.purple,
                        name: "Ignite",
                    },
                ],
            },
        ],

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
                cursor: "pointer",
                allowPointSelect: true,
            },
        },

        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;
                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 36px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.x}% </h1>
                <span style="font-size: 24px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}">${self.point.y} Acessos </span>
                </div>`;
            },
            positioner() {
                return { x: 170, y: 80 };
            },
        },
    };

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default PorcentageOfAccessOnPages;
