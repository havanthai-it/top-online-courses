import React from 'react';

import './Tag.view.scss';

class TagView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    console.log(params);
  }

  render() {
    return (
      <div className="tag-view">

      </div>
    );
  }
}

export default TagView;
