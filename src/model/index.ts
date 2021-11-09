export type AnalyticsData = {
    totalAccessOnPages: {
        ignite: {
            porcentage: number;
            value: number;
        };
        expertsClub: {
            porcentage: number;
            value: number;
        };
        all: number;
    };
    totalAccessOnPagesByHour: {
        ignite: number[];
        expertsClub: number[];
    };
    totalAccessOnPagesByMonth: {
        months: Array<number[]>;
        days: number[];
    };
    accessGoals: number;
    accessByDevice: {
        mobile: number;
        browser: number;
    };
    wordCloud: Array<{
        name: string;
        weight: number;
    }>;
};
