import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import DropdownMenu from './DropdownMenu/DropdownMenu.container';
import CategoryService from '../../../services/category.service';

import './Header.view.scss';

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDownMenu: false,
      categories: []
    }
  }

  componentWillMount() {
    CategoryService.getMany().then((response) => {
      this.setState({ categories: response.data });
    });
  }

  render() {
    return (
      <div className="header-view">
        <header>
          <div className="logo-container g-text-center">
            TOP ONLINE COURSES
          </div>

          <div className="nav-horizontal nav-horizontal-left">
            <ul className="nav-ul">
              <li className="nav-li"
                onMouseEnter={() => this.setState({ showDropDownMenu: true })}
                onMouseLeave={() => this.setState({ showDropDownMenu: false })}>
                <span className="li-label">Categories</span>
                {
                  this.state.showDropDownMenu && this.state.categories.length > 0
                  ? <DropdownMenu categories={this.state.categories} />
                  : null
                }
              </li>
              <li className="nav-li">
              <span className="li-label">Blog</span>
              </li>
            </ul>
          </div>

          <div className="nav-horizontal nav-horizontal-right">
            <ul className="nav-ul">
              <li className="nav-li">
                <span className="li-label">Subscribe us</span>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderView;
