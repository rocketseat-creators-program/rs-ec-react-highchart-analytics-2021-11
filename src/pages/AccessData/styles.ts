import styled from "styled-components";

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
        / 995px 710px;
`;
