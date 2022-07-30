import testnet_chains from '../../config/testnet/chains.json';
import { Chain } from '../types/chain';

export const getChains: () => Chain[] = () => testnet_chains;

export const getChainTitle = (data: Chain) => (data?.name && data.name.split(' ').length < 3 ? data.name : data?.short_name);
