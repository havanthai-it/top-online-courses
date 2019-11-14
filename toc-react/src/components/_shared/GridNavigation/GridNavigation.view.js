import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import './GridNavigation.view.scss';

const GridNavigationView = ({ type, listNav }) => {

  return (
    <div className="grid-navigation-view">
      <Grid container spacing={2}>
        {
          listNav.map((nav, index) => (
            <Grid item key={index} xl={2} lg={3} md={3} sm={6} xs={12}>
              <div className="grid-navigation-item">
                <span>{nav.name}</span>
              </div>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export default GridNavigationView;
