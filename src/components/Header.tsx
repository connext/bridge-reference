import React, { useEffect } from 'react';

import connextLogo from 'url:../../public/connext-white-logo.webp';
import { useWallet } from '../contexts/Wallet';
import { Wallet } from './Wallet';

export const Header = () => {
    const walletContext = useWallet();

    const { web3_provider, address } = { ...walletContext.state };

    return (
        <div className="py-4 border-b border-slate-900/10 px-8  dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="flex justify-between lg:px-10 items-center px-1 pb-5 md:pb-0">
                <img src={connextLogo} alt="Connext Logo" className="h-8 w-auto sm:h-10" />
                <div className="flex items-center justify-end">
                    {web3_provider && address && (
                        <div className="hidden sm:flex flex-col space-y-0.5 mx-2">
                            <div className="flex items-center space-x-2">
                                <span
                                    title={address}
                                    className="normal-case text-black dark:text-white text-base font-semibold"
                                >
                                    <span>{address}</span>
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="mx-2">
                        <Wallet main={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};
