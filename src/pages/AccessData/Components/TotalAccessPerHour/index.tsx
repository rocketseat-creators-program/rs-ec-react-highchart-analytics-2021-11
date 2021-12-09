import Chart from "../../../../components/Chart";

import * as S from "./styles";

const TotalAccessPerHour = () => {
    // 2. const { analyticsDataState } = useAnalyticsData();
    const options: Highcharts.Options = {
        // 1. title: {
        //     text: "",
        // },
        // 2. series: [
        //     {
        //         type: "column",
        //         name: "Experts Club",
        //         color: AnalyticsColors.ecWine,
        //         data: analyticsDataState.totalAccessOnPagesByHour?.expertsClub,
        //     },
        //     {
        //         type: "spline",
        //         name: "Ignite",
        //         color: AnalyticsColors.purple,
        //         data: analyticsDataState.totalAccessOnPagesByHour?.ignite,
        //     },
        // ],
        // 3. xAxis: {
        //     min: 0,
        //     max: 23,
        //     tickInterval: 1,
        // },
        // 4. yAxis: {
        //     title: {
        //         text: "",
        //     },
        // },
        // 5. legend: {
        //     align: "left",
        //     verticalAlign: "top",
        //     margin: 40,
        // },
        // 6. tooltip: {
        //     useHTML: true,
        //     formatter() {
        //         const self: TooltipFormatterContextObject = this;
        //         return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
        //         <h1 style="font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}</h1>
        //         <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}"> Acessos </span>
        //         </div>`;
        //     },
        // },
    };
    return (
        <S.Wrapper>
            {/* 7. <CustomChartTitle
                description="Acompanhe a quantidade de acesso por hora nas páginas do ignite e do experts club"
                title="Total de acessos por hora nas páginas"
            /> */}
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessPerHour;
