// CapsulePopup.js
import React, { useContext } from 'react';
import { AppContext } from './Context';

const CapsulePopup = () => {
    const { selectedCapsule, setSelectedCapsule } = useContext(AppContext);

    if (!selectedCapsule) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{selectedCapsule.capsule_serial}</h2>
            <p>Capsule_ID: {selectedCapsule.capsule_id}</p>
            <p>Status: {selectedCapsule.status}</p>
            <p>Type: {selectedCapsule.type}</p>
            <p>Lunch_UNIX: {selectedCapsule.original_launch_unix}</p>
            <p>Lunch_Date: {selectedCapsule.original_launch}</p>
            <p>Details: {selectedCapsule.details}</p>
            <p>Landings:{selectedCapsule.landings}</p>
            <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setSelectedCapsule(null)}
            >
            Close
            </button>
        </div>
        </div>
    );
};

export default CapsulePopup;
