import * as S from "./styles";

interface CustomChartTitleProps {
    title: string;
    description: string;
}

const CustomChartTitle = ({ title, description }: CustomChartTitleProps) => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    );
};

export default CustomChartTitle;
