
import * as React from 'react';
import { Table } from 'react-bootstrap';
import VendorData from './VendorData';
import AppProps from './AppProps';
import AppState from './AppState';
import DataAccess from './DataAccess';

export default class App3 extends React.Component<AppProps, AppState<VendorData>> {
    private url: string;
    private dataAccess: DataAccess<VendorData>;

    public constructor(props: AppProps) {
        super(props);

        this.url = this.props.url;
        this.state = {
            data: null
        };
        this.dataAccess = new DataAccess<VendorData>();
    }

    public componentDidMount(): void {
        if (!this.state.data) {
            this.dataAccess.getData(this.url)
                .then((data: ReadonlyArray<VendorData>) => this.setState({ data: data }))
                // tslint:disable-next-line:no-console
                .catch(error => console.log(error));
        }
    }

    public render() {
        return (
            <div className="container">
                <h1>React Axios TypeScript App</h1>
                {this.state.data ? this.formatTable(this.state.data) : 'Loading...'}
            </div>
        );
    }

    private formatTable(dataArray: ReadonlyArray<VendorData>) {
        return (
            <Table striped={true} bordered={true} condensed={true} hover={true}>
                <thead>
                    <tr>
                        <th>Vendor Id</th>
                        <th>Name</th>
                        <th>OCG Number</th>
                        <th>Managing QS Area</th>
                        <th>Primary Address</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((data: VendorData, n: number) => {
                        return (
                            <tr key={`row${n}`}>
                                <td>{data.vendorId}</td>
                                <td>{data.name}</td>
                                <td>{data.ocgNumber}</td>
                                <td>{data.managingQsArea}</td>
                                <td>{data.primaryAddress}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}
