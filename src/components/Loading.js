import React from 'react';



export default function Loading() {
    return (
        <div className="loading">
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}