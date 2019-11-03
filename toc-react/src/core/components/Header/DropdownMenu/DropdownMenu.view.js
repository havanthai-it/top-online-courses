import React from 'react';

import ChevronRight from '@material-ui/icons/ChevronRight';

import './DropdownMenu.view.scss';

const DropdownMenuView = ({ categories }) => {
  return (
    <div className="dropdown-menu-view g-noselect">
      <div class="top-distance"></div>
      <div className="ul-container">
        <ul className="category-ul">
          { categories.map((category, index) => {
            // CATEGORY ITEMS
            return (
              <li className="category-li">
                <span>{category.name}</span>
                <ChevronRight />
              </li>
            );
            // END CATEGORY ITEMS
          }) }
        </ul>
        <ul className="topic-ul">
          { categories[0].topics.map((topic, index) => {
            // TOPIC ITEMS
            return (
              <li className="topic-li">
                <span>{topic.name}</span>
                <ChevronRight />
              </li>
            );
            // END TOPIC ITEMS
          }) }
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenuView;
