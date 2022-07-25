import React, { useState } from 'react';
import { TransferButton } from './TransferButton';
import { SelectChain } from './SelectChain';
import { Chain } from '../utils/chain';
import { useChains } from '../contexts/Chains';
import { useAssets } from '../contexts/Assets';
import { Asset } from '../utils/asset';
import { SelectAsset } from './SelectAsset';

interface Bridge {
    source_chain?: Chain;
    destination_chain?: Chain;
    asset?: Asset;
    amount: number;
}

export const CrossChainTransfer = () => {
    const {
        state: { chains }
    } = useChains();

    const {
        state: { assets }
    } = useAssets();

    const [bridge, setBridge] = useState<Bridge>({
        source_chain: chains[0],
        destination_chain: chains[1],
        asset: assets[0],
        amount: 0
    });

    return (
        <div className="bg-slate-800 flex flex-col 2xl:w-[30%] lg:w-[55%] px-8 py-2 w-[85%] xl:w-[38%] rounded-xl pb-8 border border-slate-800">
            <div className="grid grid-cols-2 gap-4">
                <SelectChain
                    onSelect={c => {
                        const _source_chain = c;
                        const _destination_chain =
                            c === bridge.destination_chain ? bridge.source_chain : bridge.destination_chain;

                        setBridge({
                            ...bridge,
                            source_chain: _source_chain,
                            destination_chain: _destination_chain
                        });
                    }}
                    source_chain={bridge.source_chain}
                    destination_chain={bridge.destination_chain}
                    origin={true}
                />
                <SelectChain
                    onSelect={c => {
                        const _source_chain = c === bridge.source_chain ? bridge.destination_chain : bridge.source_chain;
                        const _destination_chain = c;

                        setBridge({
                            ...bridge,
                            source_chain: _source_chain,
                            destination_chain: _destination_chain
                        });
                    }}
                    source_chain={bridge.source_chain}
                    destination_chain={bridge.destination_chain}
                />
            </div>
            <SelectAsset
                disabled={!(bridge.source_chain && bridge.destination_chain)}
                value={bridge.asset}
                onSelect={a => {
                    setBridge({
                        ...bridge,
                        asset: a
                    });
                }}
            />

            <div className="grid grid-flow-row grid-cols-5 sm:grid-cols-5 gap-6 pt-8 pb-2">
                <div className="col-span-2 sm:col-span-2 space-y-1">
                    <div className="flex items-center justify-start sm:justify-start space-x-1 sm:space-x-2.5">
                        <span className="text-slate-400 dark:text-white text-sm sm:text-base sm:font-semibold">Amount</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div className="text-slate-400 dark:text-slate-600 text-xs font-medium">Balance</div>
                        <div className="flex items-center justify-center text-slate-600 dark:text-white text-xs space-x-1 "></div>
                    </div>
                </div>
                <div className="col-span-3 sm:col-span-3 flex items-center justify-end sm:justify-end">
                    <input
                        type="number"
                        placeholder="0.00"
                        min="0"
                        className="w-36 sm:w-48 bg-slate-50 focus:bg-slate-100 dark:bg-slate-900 dark:focus:bg-slate-700  border-0 focus:ring-0 rounded-md sm:text-lg font-semibold text-right py-1.5 sm:py-2 px-2 sm:px-3"
                    />
                </div>
            </div>
            <TransferButton />
        </div>
    );
};
