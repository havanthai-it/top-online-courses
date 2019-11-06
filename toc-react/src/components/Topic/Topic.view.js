import React from 'react';

import './Topic.view.scss';

class TopicView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    console.log(params);
  }

  render() {
    return (
      <div className="topic-view">

      </div>
    );
  }
}

export default TopicView;
