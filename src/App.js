import React from 'react';
import { AdvertisingProvider, AdvertisingSlot } from 'react-advertising'
import './App.css';


const config = {
  slots: [
    {
      id: "adslot",
      path: "/19968336/header-bid-tag-0",
      sizes: [[300, 250]],
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: [[300, 250]]
            }
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: 19859281
              }
            }
          ]
        }
      ]
    }
  ]
}

function App() {
  return (
    <div className="home">
      <header>
        <a id="xany">a xany product</a>
        <img className="logo" src="/tree.svg" />
        <img className="nav-icon" src="/dropdown.png" />
      </header>
      <div className="home-title">Save Trees</div>
      <div className="buttons">
        <button className="btn">Checkout what we're doing</button>
        <button className="btn">See how you can help</button>
      </div>
      <div className="slot">
        <AdvertisingProvider config={config}>
          <AdvertisingSlot id="adslot" />
        </AdvertisingProvider>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
