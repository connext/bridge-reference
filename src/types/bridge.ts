import { Asset } from '../utils/asset';
import { Chain } from '../utils/chain';

export interface Bridge {
    source_chain?: Chain;
    destination_chain?: Chain;
    asset?: Asset;
    amount: number;
}
