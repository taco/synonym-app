import React, { PropTypes } from 'react';

const Header = ({ valueTitle, matchTitle }) => {
    return (
        <thead>
            <tr>
                <th width="250px">
                    { valueTitle }
                </th>
                <th>
                    { matchTitle }
                </th>
                <th width="150px">
                    { 'Actions' }
                </th>
            </tr>
        </thead>
        );
};

Header.propTypes = {
    matchTitle: PropTypes.string.isRequired,
    valueTitle: PropTypes.string.isRequired
};

export default Header;