import styled from "styled-components";
import { device } from "../../constants";

export const Content = styled.section`
    padding: 80px;

    display: grid;
    grid-template-rows: auto;
    row-gap: 46px;
    column-gap: 40px;

    grid-template:
        "totalAccessOnPages porcentageOfAccessOnPages" minmax(auto, auto)
        "totalAccessPerHour totalAccessPerHour" minmax(auto, auto)
        "totalAccessPerMonth totalAccessPerMonth" minmax(auto, auto)
        "wordcloud wordcloud" minmax(auto, auto)
        / 995px 710px;

    @media ${device.lg} {
        grid-template:
            "totalAccessOnPages porcentageOfAccessOnPages" minmax(auto, auto)
            "totalAccessPerHour totalAccessPerHour" minmax(auto, auto)
            "totalAccessPerMonth totalAccessPerMonth" minmax(auto, auto)
            "wordcloud wordcloud" minmax(auto, auto)
            / 795px 510px;
    }

    @media ${device.md} {
        grid-template:
            "totalAccessOnPages" minmax(auto, auto)
            "porcentageOfAccessOnPages" minmax(auto, auto)
            "totalAccessPerHour" minmax(auto, auto)
            "totalAccessPerMonth" minmax(auto, auto)
            "wordcloud" minmax(auto, auto)
            / 900px;

        justify-content: center;
    }

    @media ${device.sm} {
        grid-template:
            "totalAccessOnPages" minmax(auto, auto)
            "porcentageOfAccessOnPages" minmax(auto, auto)
            "totalAccessPerHour" minmax(auto, auto)
            "totalAccessPerMonth" minmax(auto, auto)
            "wordcloud" minmax(auto, auto)
            / 600px;
    }

    @media ${device.xs} {
        grid-template:
            "totalAccessOnPages" minmax(auto, auto)
            "porcentageOfAccessOnPages" minmax(auto, auto)
            "totalAccessPerHour" minmax(auto, auto)
            "totalAccessPerMonth" minmax(auto, auto)
            "wordcloud" minmax(auto, auto)
            / 400px;
    }
`;
