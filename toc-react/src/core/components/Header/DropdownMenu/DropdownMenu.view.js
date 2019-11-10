import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './DropdownMenu.view.scss';
import { width } from '@material-ui/system';

const DropdownMenuView = ({ categories }) => {
  const [focusedCategory, setFocusedCategory] = useState(-1);
  return (
    <div className="dropdown-menu-view g-noselect"
      style={{width: focusedCategory > -1 ? '520px' : '260px'}}>
      <div className="top-distance"></div>
      <Grid container spacing={0}>
        <Grid item xs={6} className="category-ul-container">
          <ul className="category-ul">
            { categories.map((category, index) => {
              // CATEGORY ITEMS
              return (
                <li key={index} className="category-li" className={index===focusedCategory ? 'li-focused' : null}
                  onMouseEnter={() => setFocusedCategory(index)}>
                  <span>{category.name}</span>
                  <ChevronRight />
                </li>
              );
              // END CATEGORY ITEMS
            }) }
          </ul>
        </Grid>
        {
          focusedCategory > -1
          ? <Grid item xs={6} className="topic-ul-container">
              <ul className="topic-ul">
                { categories[focusedCategory].topics.map((topic, index) => {
                  // TOPIC ITEMS
                  return (
                    <li key={index} className="topic-li">
                      <span>{topic.name}</span>
                    </li>
                  );
                  // END TOPIC ITEMS
                }) }
              </ul>
            </Grid>
          : null
        }
        
      </Grid>
    </div>
  );
}

export default DropdownMenuView;
