import styled from "styled-components";
import { AnalyticsColors } from "../../constants";

export const Wrapper = styled.section``;

export const Container = styled.div`
    padding: 80px 80px;

    font-family: Inter;
    font-style: normal;

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #78787f;
    }

    h5 {
        width: 223px;
        height: 46px;
        margin: 0;

        font-weight: normal;
        font-size: 36px;
        line-height: 44px;

        color: ${AnalyticsColors.black};
    }
`;

export const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    position: relative;

    font-family: Inter;
    font-style: normal;

    select {
        width: 271px;
        height: 58px;
        background: ${AnalyticsColors.lightGrey};
        padding: 0px 16px;

        border: none;
        appearance: none;

        border-radius: 2px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;

        color: ${AnalyticsColors.black};
    }

    &::after {
        content: "▼";
        font-size: 1rem;
        top: 20px;
        right: 24px;
        position: absolute;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2px;
        margin: 0;
        border: 1px solid ${AnalyticsColors.grey};

        width: 270px;
        height: 58px;

        font-weight: bold;
        font-size: 24px;
        line-height: 29px;

        color: ${AnalyticsColors.black};
    }
`;
