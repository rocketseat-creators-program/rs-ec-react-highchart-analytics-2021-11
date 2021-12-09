import Chart from "../../../../components/Chart";
import * as S from "./styles";

const PorcentageOfAccessOnPages = () => {
    // 3. const { analyticsDataState } = useAnalyticsData();
    const options: Highcharts.Options = {
        // 1. title: {
        //     text: "Porcentagem de acessos nas páginas",
        //     useHTML: true,
        //     style: {
        //         fontSize: "20px",
        //         color: AnalyticsColors.black,
        //         fontWeight: "bold",
        //         fontStyle: "normal",
        //         fontFamily: "Inter",
        //         padding: "20px",
        //     },
        // },
        // 2. chart: {
        //     type: "pie",
        // },
        // 3. series: [
        //     {
        //         type: "pie",
        //         innerSize: "60%",
        //         data: [
        //             {
        //                 x: analyticsDataState?.totalAccessOnPages?.expertsClub
        //                     ?.value,
        //                 y: analyticsDataState?.totalAccessOnPages?.expertsClub
        //                     ?.porcentage,
        //                 color: AnalyticsColors.ecWine,
        //                 name: "Experts Club",
        //             },
        //             {
        //                 x: analyticsDataState?.totalAccessOnPages?.ignite
        //                     ?.value,
        //                 y: analyticsDataState?.totalAccessOnPages?.ignite
        //                     ?.porcentage,
        //                 color: AnalyticsColors.purple,
        //                 name: "Ignite",
        //             },
        //         ],
        //     },
        // ],
        // 4. plotOptions: {
        //     pie: {
        //         dataLabels: {
        //             enabled: false,
        //         },
        //         showInLegend: true,
        //         cursor: "pointer",
        //         allowPointSelect: true,
        //     },
        // },
        // 5. tooltip: {
        //     useHTML: true,
        //     formatter() {
        //         const self: TooltipFormatterContextObject = this;
        //         return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
        //         <h1 style="font-size: 36px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}% </h1>
        //         <span style="font-size: 24px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}">${self.point.x} Acessos </span>
        //         </div>`;
        //     },
        //     positioner() {
        //         return { x: 70, y: 80 };
        //     },
        // },
    };

    return (
        <S.Wrapper>
            <S.TotalOfAccess>
                <span>
                    {/* 6. <b>{analyticsDataState?.totalAccessOnPages?.all}</b> Acessos */}
                </span>
            </S.TotalOfAccess>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default PorcentageOfAccessOnPages;
