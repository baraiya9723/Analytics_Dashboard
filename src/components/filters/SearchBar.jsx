// src/components/filters/SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess } from '../../store/slices/dataSlice';
import { useLocation } from 'react-router-dom';


const SearchBar = ({ data }) => {
   const [searchTerm, setSearchTerm] = useState('');
   const dispatch = useDispatch();
   const previousSearchTerm = useRef('');
    const location = useLocation();
    const category = location.pathname.slice(1) || 'geography';

   useEffect(() => {
   if (!data) {
      return;
    }

    if (searchTerm === previousSearchTerm.current) {
       return;
   }
     previousSearchTerm.current = searchTerm;

   const filteredData = data.filter((item) => {
      return Object.values(item).some(
         (value) =>
           typeof value === 'string' &&
           value.toLowerCase().includes(searchTerm.toLowerCase())
      );
  });

  dispatch(fetchDataSuccess(filteredData));
}, [searchTerm, data, dispatch, category]);

   const handleChange = (e) => {
     setSearchTerm(e.target.value);
  };

   return (
    <InputGroup>
      <Form.Control
          type="search"
          placeholder="Search..."
           value={searchTerm}
            onChange={handleChange}
          />
     </InputGroup>
   );
};

export default SearchBar;