import React from 'react';
import './style.css';

export default function PageLoading()  {
    return(
        <div className="pageLoadingBackground">
            <div className="spinner">
                <div className="circle one"></div>
                <div className="circle two"></div>
                <div className="circle three"></div>
            </div>
        </div>
    );
};
