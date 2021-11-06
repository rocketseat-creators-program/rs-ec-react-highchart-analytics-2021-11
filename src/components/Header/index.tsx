import { ChangeEvent, useCallback } from "react";
import * as S from "./styles";
import ExpertsClubLogo from "../../assets/expets-club-logo.svg";
import { AnalyticsService } from "../../service/Analytics";
import { AxiosAdapter } from "../../infra/AxiosAdapter";
import { AnalyticsData } from "../../model";
import useAnalyticsData from "../../hook/useAnalyticsData";

type PresetDataProps = {
    title: string;
    value: string;
};

const PRESET_DATAS: PresetDataProps[] = [
    {
        title: "Ontem",
        value: "yesterday",
    },
    {
        title: "Semana passada",
        value: "last_week",
    },
    {
        title: "Últimos 30 dias",
        value: "last_30_days",
    },
    {
        title: "Últimos 3 meses",
        value: "last_3_months",
    },
    {
        title: "Últimos 6 meses",
        value: "last_6_months",
    },
    {
        title: "Últimos 12 meses",
        value: "last_12_months",
    },
];

const axios = new AxiosAdapter();

const Header = () => {
    const { setIsLoading, setAnalyticsDataState } = useAnalyticsData();

    const handleSelect = useCallback(
        async (e: ChangeEvent<HTMLSelectElement>) => {
            setIsLoading(true);
            await new AnalyticsService(axios)
                .getInformationsByPeriod(e.target.value)
                .then((informations) => {
                    setAnalyticsDataState(informations as AnalyticsData);
                })
                .finally(() => setIsLoading(false));
        },
        []
    );

    return (
        <S.Wrapper>
            <S.Head>
                <img src={ExpertsClubLogo} alt="Experts club logo" />
            </S.Head>
            <S.Main>
                <h5>RS Analytics</h5>
                <span>
                    Acompanhe a quantidade de acesso gerado nas páginas da
                    rocketseat, métricas de alunos que acessaram a trilha ignite
                    e experts club
                </span>

                <S.Content>
                    <h3>Dados de acesso</h3>
                    <select
                        defaultValue="DEFAULT"
                        data-testid="select-period-id"
                        name="select-period"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            handleSelect(e)
                        }
                    >
                        <option value="DEFAULT" disabled>
                            Selecione um período
                        </option>
                        {PRESET_DATAS.map((element) => (
                            <option
                                data-testid="select-option"
                                key={element.value}
                                value={element.value}
                            >
                                {element.title}
                            </option>
                        ))}
                    </select>
                </S.Content>
            </S.Main>
        </S.Wrapper>
    );
};

export default Header;
