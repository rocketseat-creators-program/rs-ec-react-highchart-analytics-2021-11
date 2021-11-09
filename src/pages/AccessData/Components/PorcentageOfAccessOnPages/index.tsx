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
                size: "100%",
                innerSize: "60%",
                data: [
                    {
                        x: 200,
                        y: 100,
                        color: AnalyticsColors.ecWine,
                        name: "Experts Club",
                    },
                    {
                        x: 200,
                        y: 300,
                        color: AnalyticsColors.purple,
                        name: "Ignite",
                    },
                ],
            },
        ],
    };

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default PorcentageOfAccessOnPages;
