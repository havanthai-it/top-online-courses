import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, OutlinedInput, InputAdornment, Container } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import TabListCoursesHorizontal from './../_shared/TabListCoursesHorizontal/TabListCoursesHorizontal.container';
import GridNavigation from './../_shared/GridNavigation/GridNavigation.container';

import CategoryService from './../../services/category.service';
import './Home.view.scss';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourses: [],
      type: 'category',
      listNav: [],

      search: ''
    }
  }

  componentWillMount() {
    CategoryService.getMany().then((res) => {
      this.setState({ listNav: res.data });
    });
    this.setState({ listNav: [
      { name: 'Computer Science' },
      { name: 'Data Science' },
      { name: 'Design' },
      { name: 'Marketing' }
    ] });
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSearch() {
  }

  render() {
    return (
      <div className="home-view">
        <div className="home-main-image">
          <div className="home-main-image-overlay"></div>
          <div className="main-box-container">
            <Container fixed>
              <div className="main-box">
                <h1>Choose the best online courses for you</h1>
                <p>There are million of online courses on the internet. Let we help you pick the right one.</p>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    className="search-input"
                    value={this.state.search}
                    onChange={(event) => this.handleSearchChange(event)}
                    endAdornment={<InputAdornment className="g-cursor-pointer" onClick={() => this.handleSearch()} position="end"><Search /></InputAdornment>}
                  />
                </FormControl>
              </div>
            </Container>
          </div>
        </div>

        <br />

        <Container fixed>
          <div className="section">
            <TabListCoursesHorizontal listTabs={this.state.listNav} />
          </div>
        </Container>
        
        <Container fixed>
          <div className="section">
            <h1 className="section-title">Categories</h1>
            <GridNavigation type={this.state.type} listNav={this.state.listNav} />  
          </div>
        </Container>
        
      </div>
    );
  }
}

export default HomeView;
