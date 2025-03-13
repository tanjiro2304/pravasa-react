
import HaltDto from "../../models/HaltDto.tsx";
import {Table} from "react-bootstrap";
import '../tables/DataTable.css';
interface DataTableProps{
    halts:HaltDto[];
}

const DataTable: React.FC<DataTableProps> = ({halts}) => {
    console.log('Inside Data Table',halts);
    return (
        <div>
            <Table className='data-table' striped bordered hover style={{marginTop:'1rem'}}>
                <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Stop Name</th>
                </tr>
                </thead>
                <tbody>
                {halts.map((item , index: number) =>(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.stopName}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    )
}

export default DataTable;