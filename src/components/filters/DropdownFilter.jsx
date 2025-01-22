// src/components/filters/DropdownFilter.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess } from '../../store/slices/dataSlice';
 import { useLocation } from 'react-router-dom';

const DropdownFilter = ({ data, options, label, filterKey}) => {
   const [selectedValue, setSelectedValue] = useState('');
   const dispatch = useDispatch();
  const previousSelectedValue = useRef('');
  const location = useLocation();
   const category = location.pathname.slice(1) || 'geography';



   useEffect(() => {
      if (!data) {
          return;
       }
      if (selectedValue === previousSelectedValue.current) {
          return;
        }
       previousSelectedValue.current = selectedValue;

    const filteredData = data.filter((item) => {
         if (!selectedValue) return true;
          return item[filterKey] === selectedValue;
      });
        dispatch(fetchDataSuccess(filteredData));
 }, [selectedValue, data, dispatch, filterKey, category]);

   const handleChange = (e) => {
     setSelectedValue(e.target.value);
  }
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
       <Form.Control as="select" value={selectedValue}  onChange={handleChange} >
            <option value="">All</option>
          {options?.map((option) => (
              <option key={option} value={option}>
                 {option}
               </option>
              ))}
         </Form.Control>
    </Form.Group>
);
};

export default DropdownFilter;