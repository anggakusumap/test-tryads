import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface ISearch {
    className: string;
}

const Search = ({ className }: ISearch) => {
    return (
        <div className={ className }>
            <FaSearch />
        </div>
    );
};

export default Search;