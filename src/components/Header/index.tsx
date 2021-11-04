import * as S from "./styles";
import ExpertsClubLogo from "../../assets/expets-club-logo.svg";

const Header = () => {
    return (
        <S.Wrapper>
            <img src={ExpertsClubLogo} alt="Experts club logo" />
        </S.Wrapper>
    );
};

export default Header;
