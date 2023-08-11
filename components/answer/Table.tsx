import { TableType } from "@/_mock/answers";

type TableProps = {
    data: TableType,
};

const Table = ({ data }: TableProps) => {
    return (
        <div className="msg-header">
            <table className="table">
                <thead>
                    <tr>
                        <th className="bg-white">Property</th>
                        <th className="bg-white">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr data-index={index + 1} key={index}>
                            <td>{item.property}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn-groups">
                <div className="g-btn"><a href="#">Paid Keyword List</a>
                </div>
                <div className="g-btn"> <a href="#">Add to ConnectWise</a></div>
                <div className="g-btn"><a href="#">Organic Keyword List</a>
                </div>
                <div className="g-btn"><a href="#">Track</a></div>
            </div>
        </div>
    );
};

export default Table;