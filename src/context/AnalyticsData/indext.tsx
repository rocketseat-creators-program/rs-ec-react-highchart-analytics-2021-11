import { createContext, useState } from "react";
import { AnalyticsData } from "../../model";

type AnalyticsDataContextProviderProps = {
    children: React.ReactNode;
};

type AnalyticsDataContextProps = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    analyticsDataState: AnalyticsData;
    setAnalyticsDataState: React.Dispatch<React.SetStateAction<AnalyticsData>>;
};

const AnalyticsDataContext = createContext<AnalyticsDataContextProps>({
    isLoading: false,
    setIsLoading: () => {},
    analyticsDataState: {} as AnalyticsData,
    setAnalyticsDataState: () => {},
});

const AnalyticsDataContextProvider = ({
    children,
}: AnalyticsDataContextProviderProps) => {
    const [analyticsDataState, setAnalyticsDataState] = useState<AnalyticsData>(
        {} as AnalyticsData
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <AnalyticsDataContext.Provider
            value={{
                isLoading,
                analyticsDataState,
                setAnalyticsDataState,
                setIsLoading,
            }}
        >
            {children}
        </AnalyticsDataContext.Provider>
    );
};

export { AnalyticsDataContextProvider };

export default AnalyticsDataContext;
