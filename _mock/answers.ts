import htmlMarkup from "./htmlMarkup";

export type ParagraphType = string;

export type TableType = {
    property: string,
    value: string,
}[];

export type MarkupType = string;

export type ChartData = (string | number)[];

export type ChartOptions = {
    title?: string,
    chart?: {
        title: string,
        subtitle: string,
    }
};

export type Chart = {
    chartType: string,
    data: ChartData[],
    options?: ChartOptions,
}

export type AnswersType = {
    paragraph: ParagraphType,
    table: TableType,
    markup: MarkupType,
    Bar: Chart,
    PieChart: Chart
};

const answers: AnswersType = {
    paragraph: "It seems you are referring to actors in a movie or a show, but you didn't mention which specific movie or show you're talking about. Please provide more information or clarify your question, and I can try to help you with that.",
    table: [
        {
            property: "Industries",
            value: "Design, Graphic Design, Web app, Software engineering, Startup, Technology, Innovation, Publishing, product design"
        },
        {
            property: "Locations",
            value: "Surry Hills, New South Wales 2010 AU, Makati, National Capital Region 1229 PH, Beijing, Chaoyang 101101 CN, Austin, Texas 78701 US",
        },
    ],
    markup: htmlMarkup,
    Bar: {
        chartType: 'Bar',
        data: [
            ["Year", "Sales", "Expenses", "Profit"],
            ["2014", 1000, 400, 200],
            ["2015", 1170, 460, 250],
            ["2016", 660, 1120, 300],
            ["2017", 1030, 540, 350],
        ],
        options: {
            chart: {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
        }
    },
    PieChart: {
        chartType: 'PieChart',
        data: [
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
        ],
    },
};

export default answers;