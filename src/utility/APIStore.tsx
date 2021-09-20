import { Store } from 'react-stores';

export interface APIStoreProps {
  APIKey: string | undefined;
}

export const APIStore = new Store<APIStoreProps>({
  APIKey: undefined, // initial state values
});
