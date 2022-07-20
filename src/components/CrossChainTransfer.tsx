import * as React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TransferButton } from './TransferButton';

import connextLogo from 'url:../../public/connext-white-logo.webp';

export const CrossChainTransfer = () => (
    <div className="bg-slate-800 flex flex-col 2xl:w-[30%] lg:w-[55%] px-8 py-2 w-[85%] xl:w-[38%] rounded-xl pb-8 border border-slate-800">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label
                    htmlFor="origin"
                    className="block items-center text-slate-400 dark:text-white text-sm sm:text-base sm:font-semibold gap-2 pt-8 pb-2"
                >
                    Origin
                </label>
                <select
                    id="origin"
                    name="origin"
                    autoComplete="origin-name"
                    className="bg-slate-50 dark:bg-slate-900 px-3 py-3 rounded-md border-0 focus:ring-0 gap-2 w-full"
                >
                    <option>Rinkeby</option>
                    <option>Goril</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="destination"
                    className="block items-center text-slate-400 dark:text-white text-sm sm:text-base sm:font-semibold gap-2 pt-8 pb-2"
                >
                    Destination
                </label>
                <select
                    id="destination"
                    name="destination"
                    autoComplete="destination-name"
                    className="bg-slate-50 dark:bg-slate-900 px-3 py-3 rounded-md border-0 focus:ring-0 gap-2 w-full"
                >
                    <option>Rinkeby</option>
                    <option>Goril</option>
                </select>
            </div>
        </div>
        <div>
            <label
                htmlFor="token"
                className="block items-center text-slate-400 dark:text-white text-sm sm:text-base sm:font-semibold gap-2 pt-8 pb-2"
            >
                Token
            </label>
            <select
                id="token"
                name="token"
                autoComplete="token-name"
                className="bg-slate-50 dark:bg-slate-900 px-3 py-3 rounded-md border-0 focus:ring-0 gap-2 w-full"
            >
                <option>Test</option>
            </select>
        </div>

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
