import React from 'react';
import { useState } from 'react';

export const TransferButton = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="pt-6">
            <button
                className="font-bold text-center py-3 px-4 text-white bg-[#772EDA] w-full rounded-md"
                onClick={() => setShowModal(true)}
            >
                Bridge
            </button>
        </div>
    );
};
