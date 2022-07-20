import * as React from 'react';

import connextLogo from 'url:../../public/connext-white-logo.webp';

export const Header = () => {
    const handleModal = () => {
        //todo: add modal
    };

    return (
        <div className="py-4 border-b border-slate-900/10 px-8  dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="flex justify-between lg:px-10 items-center px-1 pb-5 md:pb-0">
                <img src={connextLogo} alt="Connext Logo" className="h-8 w-auto sm:h-10" />
                <button
                    className="border-2 border-[#511597] rounded-full lg:px-7 text-[#511597] h-9 text-sm lg:text-base px-3"
                    onClick={() => handleModal()}
                >
                    Connect Wallet
                </button>
            </div>
        </div>
    );
};
