import Chart from "../../../../components/Chart";
import * as S from "./styles";
// 1. import Eye from "../../../../assets/eye.svg";

export const TotalAccessOnPages = () => {
    // 3. const { analyticsDataState } = useAnalyticsData();

    const options: Highcharts.Options = {
        // 1. title: {
        //     text: `<img src=${Eye} width="16" height="16" style="margin-right:8px;" alt="Ícone de view" /> Total de acessos nas páginas`,
        //     useHTML: true,
        //     align: "left",
        //     style: {
        //         padding: "30px",
        //         fontSize: "20px",
        //         color: AnalyticsColors.black,
        //         fontWeight: "bold",
        //         fontStyle: "Normal",
        //         fontFamily: "Inter",
        //     },
        // },
        // 2. chart: {
        //     type: "column",
        // },
        // 3.  series: [
        //     {
        //         name: "Ignite",
        //         type: "column",
        //         data: [analyticsDataState?.totalAccessOnPages?.ignite?.value],
        //         color: AnalyticsColors.purple,
        //     },
        //     {
        //         name: "Experts Club",
        //         type: "column",
        //         data: [
        //             analyticsDataState?.totalAccessOnPages?.expertsClub?.value,
        //         ],
        //         color: AnalyticsColors.ecWine,
        //     },
        // ],
        // 4. tooltip: {
        //     enabled: false,
        // },
        // 5. yAxis: {
        //     min: 0,
        //     title: {
        //         text: "",
        //     },
        // },
        // 6. plotOptions: {
        //     column: {
        //         dataLabels: {
        //             useHTML: true,
        //             enabled: true,
        //             color: AnalyticsColors.black,
        //             inside: true,
        //             verticalAlign: "bottom",
        //             borderWidth: 3,
        //             shadow: false,
        //             style: {
        //                 fontSize: "36px",
        //                 fontWeight: "bold",
        //                 fontStyle: "Normal",
        //                 lineHeight: "44px",
        //                 fontFamily: "Inter",
        //                 textOutline: "0",
        //                 padding: "14px",
        //             },
        //         },
        //     },
        // },
    };

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalAccessOnPages;
