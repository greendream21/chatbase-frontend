import { Chart as GoogleChart } from "react-google-charts";

const Chart = ({ chartData }: any) => {
    const { chartType, data, options } = chartData;
    console.log('chartData: ', chartData);

    return (
        <div className="msg-header chartWrapper">
            <GoogleChart
                chartType={chartType}
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </div>
    );
};

export default Chart;