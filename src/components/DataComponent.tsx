
import * as React from 'react';
import axios from 'axios';
import AppProps from './AppProps';
import AppState from './AppState';

export class DataComponent<T> extends React.Component<AppProps, AppState<T>> {
    public url: string;

    constructor(props: AppProps) {
        super(props);

        this.url = this.props.url;
        this.state = {
            data: null
        };
    }

    componentDidMount(): void {
        if (!this.state.data) {
            this.getData(this.url)
                .then((data: ReadonlyArray<T>) => this.setState({ data: data }))
                // tslint:disable-next-line:no-console
                .catch(error => console.log(error));
        }
    }

    async getData(url: string): Promise<ReadonlyArray<T>> {
        const result = await axios(url);
        return result.data as ReadonlyArray<T>;
    }
}
