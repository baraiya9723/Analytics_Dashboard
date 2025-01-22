// src/components/tables/DataTable.jsx
import React from 'react';
import { Table } from 'react-bootstrap';
import { useMemo, useState } from 'react';
import styles from './DataTable.module.css'
import LoadingSpinner from '../ui/LoadingSpinner';

const DataTable = ({ data, columns, itemsPerPage = 5, loading, error }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState(null);
     const [sortOrder, setSortOrder] = useState('asc');


    const sortedData = useMemo(() => {
         if (!data) {
          return [];
         }
       const sorted = [...data];

        if (sortColumn) {
            sorted.sort((a, b) => {
             if (a[sortColumn] < b[sortColumn]) {
                return sortOrder === 'asc' ? -1 : 1;
               }
               if (a[sortColumn] > b[sortColumn]) {
                    return sortOrder === 'asc' ? 1 : -1;
                }
                   return 0;
           });
        }
          return sorted
   }, [data, sortColumn, sortOrder]);


    const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

     const totalPages = Math.ceil(sortedData.length / itemsPerPage);

     const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
     }
     const handleSort = (columnKey) => {
       if(sortColumn === columnKey) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }
        else{
          setSortColumn(columnKey);
         setSortOrder('asc');
         }
      };

    const renderPagination = () => {
        const pages = [];
      for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                   <button onClick={() => handlePageChange(i)} className="page-link">
                         {i}
                    </button>
                </li>
            );
         }
        return <ul className="pagination">{pages}</ul>;
     };

  if (loading) {
       return  <div className={styles.dataTableContainer}><LoadingSpinner /></div>;
     }

  if (error) {
       return  <div className={styles.dataTableContainer}><p>Error: {error}</p></div>
   }

 if (!data || data.length === 0) {
      return   <div className={styles.dataTableContainer}><p>No data available.</p></div>;
   }


     return (
        <div className={styles.dataTableContainer}>
        <Table striped bordered hover responsive className={styles.table}>
          <thead>
              <tr>
                {columns.map((column) => (
                    <th
                        key={column.key}
                        onClick={() => handleSort(column.key)}
                        style={{cursor: 'pointer'}}
                         >
                         {column.label}
                        {sortColumn === column.key && (
                            <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
                          )}
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
                {currentItems.map((item,index) => (
                  <tr key={index}>
                      {columns.map((column) => (
                          <td key={column.key} >
                                { column.render ? column.render(item) :  item[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
             </tbody>
        </Table>
         {renderPagination()}
        </div>
    );
};
export default DataTable;