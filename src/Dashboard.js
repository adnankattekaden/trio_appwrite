import React from 'react';
import Navbar from './Navbar';
import './Dashboard.css'
export default function Dashboard() {

  return(
    <div>
        <Navbar/>
        <div className="dash-div2">
            <div className="dash-div3">
                <button>Share Your Idea</button>
            </div>
            <div className="dash-div4">
                <div className="idea-text">
                Idea Description
                </div>
                <div className="idea-info">
                    <div className="idea-author">
                        Shivansh Goel
                    </div>
                    <div className="idea-tag">
                        Tech
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}