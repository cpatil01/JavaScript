

import React, { useState } from 'react';

function RaiseTicket() {
    const [selectedAsset, setSelectedAsset] = useState('Select Asset');
    const [selectedReason, setSelectedReason] = useState('Select Reason');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleAssetChange = (event) => {
        setSelectedAsset(event.target.value);
    };

    const handleReasonChange = (event) => {
        setSelectedReason(event.target.value);
    };

    const isSubmitEnabled = selectedAsset !== 'Select Asset' && selectedReason !== 'Select Reason';

    const handleSubmit = () => {
        // Handle submission logic here
        // For now, just close the popup
        handleOpenPopup();
    };

    return (
        <div className="raise-ticket-container justify-content-center align-items-center h-100 place-items-center place-content-center pl-5 ml-80 ">
            <div className="select-section w-50">
                <select
                    className="w-7/12 p-2.5 text-black bg-white border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black-700"
                    onChange={handleAssetChange}
                    value={selectedAsset}
                >
                    <option value="Select Asset">Select Asset</option>
                    <option value="MacBook Pro">MacBook Pro</option>
                    <option value="Lenovo thinkpad">Lenovo thinkpad</option>
                    <option value="Other">Other</option>
                </select>
                <h3 className='pb-12'>e.g. MacBook Pro | A 3 F K S T</h3>
            </div>
            <div className="select-section w-50">
                <select
                    className="w-7/12 p-2.5  text-black bg-white border border-black rounded-md shadow-sm outline-none appearance-none focus:border-black-600"
                    onChange={handleReasonChange}
                    value={selectedReason}
                >
                    <option value="Select Reason">Select Reason</option>
                    <option value="My asset is not listed">My asset is not listed</option>
                    <option value="My asset is not Scanned">Asset Lost/Stolen</option>
                    <option value="Other">Other</option>
                </select>
                <h3 className='pb-12'>e.g. My asset is not listed</h3>
            </div>
            <div className="submit-section d-flex justify-content-center align-items-center">
                <button
                    onClick={handleSubmit}
                    className={`bg-red-500 w-7/12 text-white px-4 py-2 rounded-md hover:bg-red-700 ${isSubmitEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isSubmitEnabled}
                >
                    Submit
                </button>
                {isPopupOpen && (
                         <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50">
                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-80 h-60 px-6 py-8 rounded-md shadow-md text-center">
                                {/* <img src='{tick}' className="w-20 h-20" /> */}
                                 <h3 className='font-bold pt-8 pb-4'>Ticket Raised</h3>
                                 <p className='pb-4'>A ticket has been successfully raised for the asset</p>
                                 <button
                                     onClick={handleClosePopup}
                                     className="absolute top-2 right-2 hover:text-red-700"
                                 >
                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                     </svg>
                                 </button>
                                 <div className="flex justify-center mt-4">
                                     <button
                                         onClick={handleClosePopup}
                                         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 text-base font-semibold w-60"
                                     >
                                         Close
                                     </button>
                                 </div>
                             </div>
                         </div>
                     )}
            </div>
        </div>
    );
}

export default RaiseTicket;
