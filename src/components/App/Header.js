import React, { PropTypes } from 'react';

import Persist from './Persist';

const Header = ({ store }) => {
    const title = 'Search Synonyms';

    return (
        <div>
            <h1>
                { title }
            </h1>
            <div className="text-right">
                <Persist store={ store } />
            </div>
        </div>
        );
};

export default Header;
