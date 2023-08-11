import Table from "./Table";
import Markup from "./Markup";
import Paragraph from "./Paragraph";
import Chart from "./Chart";

type AnsBody = {
    type: any,
    data: any,
};

const AnsBody = ({ type, data }: AnsBody) => {
    switch (type) {
        case "table":
            return <Table data={data} />;
        case 'markup':
            return <Markup data={data} />;
        case 'paragraph':
            return <Paragraph data={data} />;
        case 'Bar':
        case 'PieChart':
            return <Chart chartData={data} />;
        default:
            return null;
    }
};

export default AnsBody;