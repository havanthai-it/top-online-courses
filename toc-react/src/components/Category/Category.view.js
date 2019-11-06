import React from 'react';

import './Category.view.scss';

class CategoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    console.log(params);
  }

  render() {
    return (
      <div className="category-view">

      </div>
    );
  }
}

export default CategoryView;
