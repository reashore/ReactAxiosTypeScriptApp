
import axios from 'axios';

export default class DataAccess<T> {
    async getData(url: string): Promise<ReadonlyArray<T>> {
        const result = await axios(url);
        return result.data as ReadonlyArray<T>;
    }
}