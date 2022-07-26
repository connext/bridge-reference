import React from 'react';
import { WalletProvider } from '../contexts/Wallet';
import { CrossChainTransfer } from '../components/CrossChainTransfer';
import { Header } from '../components/Header';

import '../styles/main.pcss';
import { ChainsProvider, useChains } from '../contexts/Chains';
import { AssetsProvider } from '../contexts/Assets';
import { BalancesProvider } from '../contexts/Balances';

export const App = () => (
    <WalletProvider>
        <ChainsProvider>
            <AssetsProvider>
                <BalancesProvider>
                    <div className="overflow-auto pb-3 px-3 h-full antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
                        <Header />
                        <div className="flex justify-center pt-10 pb-10 inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                            <p>Cross-Chain Transfer</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <CrossChainTransfer />
                        </div>
                    </div>
                </BalancesProvider>
            </AssetsProvider>
        </ChainsProvider>
    </WalletProvider>
);
