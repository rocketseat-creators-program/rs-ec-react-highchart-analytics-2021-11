import styled from "styled-components";
import { AnalyticsColors } from "../../../../constants";

export const Wrapper = styled.div`
    grid-area: porcentageOfAccessOnPages;
    border: 1px solid ${AnalyticsColors.grey};
`;

export const TotalOfAccess = styled.div`
    position: relative;
    top: 215px;
    z-index: 1;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 0;

        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 29px;
        color: ${AnalyticsColors.darkGray};

        b {
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            color: ${AnalyticsColors.black};
        }
    }
`;
