import { Asset } from '../types/asset';
import testnet_assets from '../../config/testnet/assets.json';

export const getAssets: () => Asset[] = () => testnet_assets;
