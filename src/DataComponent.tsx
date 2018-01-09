
import * as React from 'react';
import axios from 'axios';

export interface AppProps {
    url: string;
}

interface AppState<T> {
    data: ReadonlyArray<T> | null;
}

export class DataComponent<T> extends React.Component<AppProps, AppState<T>> {
    public url: string;

    constructor(props: AppProps) {
        super(props);

        this.url = this.props.url;
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        if (!this.state.data) {
            this.getData(this.url)
                .then((data: ReadonlyArray<T>) => this.setState({ data: data }))
                // tslint:disable-next-line:no-console
                .catch(error => console.log(error));
        }
    }

    async getData(url: string) {
        const result = await axios(url);
        return result.data as ReadonlyArray<T>;
    }
}