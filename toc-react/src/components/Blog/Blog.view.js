import React from 'react';

import './Blog.view.scss';

class BlogView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    console.log(params);
  }

  render() {
    return (
      <div className="blog-view">

      </div>
    );
  }
}

export default BlogView;
