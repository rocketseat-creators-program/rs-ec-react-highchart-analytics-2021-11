import styled from "styled-components";
import { AnalyticsColors } from "../../constants";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 25px 0 25px 70px;

    border: 1px solid ${AnalyticsColors.grey};
    box-shadow: 0px 0px 5px 0px ${AnalyticsColors.grey};

    img {
        width: 240px;
        height: 48px;
    }
`;
