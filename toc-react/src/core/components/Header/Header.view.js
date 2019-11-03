import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import DropdownMenu from './DropdownMenu/DropdownMenu.container';

import './Header.view.scss';

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDownMenu: false,

      categories: [
        { 
          name: 'IT & Software',
          topics: [
            { name: "Web Development" },
            { name: "Mobile Development" },
            { name: "Mobile Development" }
          ]
        },
        { 
          name: 'Digital Marketing',
          topics: [
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="header-view">
        <header>
          <div className="logo-container">
            TOP ONLINE COURSES
          </div>

          <div className="nav-horizontal">
            <ul className="nav-ul">
              <li className="nav-li"
                onMouseEnter={() => this.setState({ showDropDownMenu: true })}
                onMouseLeave={() => this.setState({ showDropDownMenu: false })}>
                <Button color="primary">Categories</Button>
                {
                  this.state.showDropDownMenu
                  ? <DropdownMenu categories={this.state.categories} />
                  : null
                }
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderView;
