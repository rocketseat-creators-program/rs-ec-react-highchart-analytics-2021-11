import styled from "styled-components";
import { AnalyticsColors } from "../../constants";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid ${AnalyticsColors.grey};
    padding: 20px 32px;
`;

export const Title = styled.h5`
    display: flex;
    align-items: center;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: ${AnalyticsColors.black};

    margin: 5px 0px;
`;
export const Description = styled.span`
    display: flex;
    align-items: center;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #78787f;
`;
