import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import DropdownMenu from './DropdownMenu/DropdownMenu.container';
import CategoryService from '../../../services/category.service';
import SubscribeDialog from './../../../components/_dialogs/SubscribeDialog/SubscribeDialog.container';

import './Header.view.scss';

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDownMenu: false,
      showSubscribeDialog: false,
      categories: []
    }
  }

  componentWillMount() {
    CategoryService.getMany().then((response) => {
      this.setState({ categories: response.data });
    });
  }

  openSubscribeDialog() {
    this.setState({ showSubscribeDialog: true });
  }

  closeSubscriveDialog() {
    this.setState({ showSubscribeDialog: false })
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
                <span className="li-label" onClick={() => this.openSubscribeDialog()}>Subscribe us</span>
                <Dialog fullWidth maxWidth="xs" onClose={() => this.closeSubscriveDialog()} open={this.state.showSubscribeDialog}>
                  <CloseIcon style={{ position: 'absolute', top: '4px', right: '4px', color: '#fff', cursor: 'pointer'}}
                    onClick={() => this.closeSubscriveDialog()}/>
                  <SubscribeDialog />
                </Dialog>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderView;
