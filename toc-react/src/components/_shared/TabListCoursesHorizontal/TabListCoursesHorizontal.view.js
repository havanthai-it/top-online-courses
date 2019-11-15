import React from 'react';
import { Tabs, Tab, TabPanel, Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';

import CourseItem from './CourseItem/CourseItem.container';
import './TabListCoursesHorizontal.view.scss';

const TabListCoursesHorizontalView = ({ listTabs }) => {

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  const TabPanel = ({index, currentTab, name}) => {
    return (
      <div id={`scrollable-auto-tabpanel-${index}`}>
        { index === currentTab &&
          <div>
            <div>{ name }</div>
            <Grid container spacing={2}>
              <Grid item xl={2} lg={3} md={3} sm={6} xs={12}>
                <CourseItem course={null} index={0} />
              </Grid>
              <Grid item xl={2} lg={3} md={3} sm={6} xs={12}>
                <CourseItem course={null} index={1} />
              </Grid>
              <Grid item xl={2} lg={3} md={3} sm={6} xs={12}>
                <CourseItem course={null} index={2} />
              </Grid>
              <Grid item xl={2} lg={3} md={3} sm={6} xs={12}>
                <CourseItem course={null} index={3} />
              </Grid>
            </Grid>
          </div>
        }
      </div>
    );
  }

  return (
    <div className="tab-list-courses-horizontal">
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        { listTabs.map((nav, index) => <Tab key={index} label={nav.name} />) }
      </Tabs>
      <hr />
      {
        listTabs.map((nav, index) => (
          <TabPanel index={index} currentTab={currentTab} name={nav.name} />
        ))
      }
    </div>
  );

}

export default TabListCoursesHorizontalView;
