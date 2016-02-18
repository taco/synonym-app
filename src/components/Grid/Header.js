import React, { PropTypes } from 'react';

const Header = ({ valueTitle, matchTitle }) => {
    return (
        <thead>
            <tr>
                <th>
                    { valueTitle }
                </th>
                <th>
                    { matchTitle }
                </th>
                <th>
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