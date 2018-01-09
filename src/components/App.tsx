
import * as React from 'react';
import { Table } from 'react-bootstrap';
import { DataComponent, AppProps } from './DataComponent';

interface VendorData {
  vendorId: number;
  name: string;
  ocgNumber: string;
  managingQsArea: string;
  primaryAddress: string;
}

export class App extends DataComponent<VendorData> {
  constructor(props: AppProps) {
    super(props);

    this.url = this.props.url;
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <div>
        <h1>React Axios TypeScript App</h1>
        {this.state.data ? this.formatTable(this.state.data) : 'Loading...'}
      </div>
    );
  }

  formatTable(dataArray: ReadonlyArray<VendorData>) {
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
