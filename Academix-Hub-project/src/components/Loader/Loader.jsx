import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        </div>
    );
};

export default Loader;