import Header from "../../components/Header";
import * as S from "./styles";

const AccessData = () => {
    const headerText = 10;

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <h5>RS Analytics</h5>
                <span>
                    Acompanhe a quantidade de acesso gerado nas páginas da
                    rocketseat, métricas de alunos que acessaram a trilha ignite
                    e experts club
                </span>

                <S.SubHeader>
                    <h3>Dados de acesso</h3>
                    <select name="select">
                        <option defaultValue="">Selecione um período</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </S.SubHeader>
            </S.Container>
        </S.Wrapper>
    );
};

export default AccessData;
