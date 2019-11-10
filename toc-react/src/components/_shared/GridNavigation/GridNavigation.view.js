import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import CategoryService from './../../../services/category.service';
import './GridNavigation.view.scss';

const GridNavigationView = ({ type, listNav }) => {

  return (
    <div className="grid-navigation-view">
      <Grid container spacing={2}>
        {
          listNav.map((nav, index) => (
            <Grid item key={index} xs={6} sm={6} md={3} lg={3}>
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
