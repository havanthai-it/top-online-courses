import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, OutlinedInput, InputAdornment, InputLabel } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import ListCourses from '../_shared/ListCourses/ListCourses.container';
import GridNavigation from '../_shared/GridNavigation/GridNavigation.container';

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
        </div>
        <br />
        <div>
          <GridNavigation type={this.state.type} listNav={this.state.listNav} />  
        </div>
        
      </div>
    );
  }
}

export default HomeView;
