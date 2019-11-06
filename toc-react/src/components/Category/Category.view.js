import React from 'react';

import GridNavigation from '../_shared/GridNavigation/GridNavigation.container';
import './Category.view.scss';

class CategoryView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'topic',
            listNav: [
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
                { name: 'Web Development' },
            ]
        }
    }

    componentWillMount() {
        const { match: { params } } = this.props;
        console.log(params);
    }

    render() {
        return (
            <div className="category-view">
                <GridNavigation type={this.state.type} listNav={this.state.listNav} />
            </div>
        );
    }
}

export default CategoryView;
