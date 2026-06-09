import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';


function SpecialMenu() {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specilaMenu-title">
        <SubHeading title="Discover flavors that fit your palate"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__special-menu">
        <div className="app__specialMenu_wine flex__center">
          <p className='app__specialMenu_heading'>Wines</p>
          <div className="app__specialMenu-items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu_img">
          <img src={images.wine} alt="wine img" />
        </div>

        <div className="app__specialMenu_beers flex__center">
          <p className='app__specialMenu_heading'>Beers</p>
          <div className="app__specialMenu-items">
            {data.beers.map((beer, index) => (
              <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  );
}

export default SpecialMenu;
