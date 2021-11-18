import Highcharts, { TooltipFormatterContextObject } from "highcharts";
import wordCloud from "highcharts/modules/wordcloud.js";
import Chart from "../../../../components/Chart";
import CustomChartTitle from "../../../../components/CustomChartTitle";
import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import * as S from "./styles";

wordCloud(Highcharts);

const Wordcloud = () => {
    const { analyticsDataState } = useAnalyticsData();

    const options: Highcharts.Options = {
        title: {
            text: "",
        },

        series: [
            {
                type: "wordcloud",
                data: analyticsDataState.wordCloud,
                style: {
                    fontFamily: "Inter",
                },
                rotation: {
                    from: -30,
                    to: 60,
                    orientations: 5,
                },
                colors: [
                    AnalyticsColors.ecWine,
                    AnalyticsColors.grey,
                    AnalyticsColors.purple,
                    AnalyticsColors.darkGray,
                ],
            },
        ],

        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;
                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 30px; font-family: Inter; color: ${
                    AnalyticsColors.black
                }; margin: 0px;"> ${self.point.options.weight}</h1>
                <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${
                    AnalyticsColors.darkGray
                }"> ${
                    self.point.options.weight === 1 ? "Menção" : "Menções"
                } </span>
                </div>`;
            },
        },
    };
    return (
        <S.Wrapper>
            <CustomChartTitle
                description="Acompanhe as palavras mais comentadas nas páginas do ignite e do experts club"
                title="Palavras mais comentadas"
            />

            <Chart options={options} />
        </S.Wrapper>
    );
};

export default Wordcloud;
