// src/hooks/useData.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchOriginalDataSuccess } from '../store/slices/dataSlice';
import mockData from '../utils/mockData'
 import { useLocation } from 'react-router-dom';


const useData = () => {
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.data)
    const [loading, setLoading] = useState(dataState.loading);
    const [error, setError] = useState(dataState.error);
const location = useLocation();


  const fetchData = async () => {
      dispatch(fetchDataStart());
       setLoading(true);
       try {
          // Simulate API call with a promise
           await new Promise(resolve => setTimeout(resolve, 100));
           const mock = mockData;
            const category = location.pathname.slice(1) || 'geography';
            console.log(category)
            dispatch(fetchOriginalDataSuccess(mock));
             const filteredData =  mock.filter((item) =>  item.category === category)
            dispatch(fetchDataSuccess(filteredData))
            setLoading(false);
        } catch (err) {
               dispatch(fetchDataFailure(err.message));
              setError(err.message);
             setLoading(false);
       }
  };

 useEffect(() => {
    fetchData();
 }, [location.pathname]);

 useEffect(() => {
       setLoading(dataState.loading);
    setError(dataState.error)
}, [ dataState.loading, dataState.error]);


 return {
      data: dataState.data,
       originalData: dataState.originalData,
        loading,
        error,
     fetchData
  };
};

export default useData;