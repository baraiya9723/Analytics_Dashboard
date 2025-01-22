// src/components/tables/SummaryDataTable.jsx
import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './DataTable.module.css';


const SummaryDataTable = ({ data }) => {
  return (
    <div  className={styles.dataTableContainer}>
         <Table striped bordered hover responsive className={styles.table}>
              <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Claims per Item</th>
                        <th>Cost per Item</th>
                    </tr>
              </thead>
             <tbody>
                   <tr>
                       <td>Mean</td>
                       <td>{data.mean.claimsPerItem}</td>
                       <td>{data.mean.costPerItem}</td>
                   </tr>
                  <tr>
                    <td>Median</td>
                    <td>{data.median.claimsPerItem}</td>
                     <td>{data.median.costPerItem}</td>
                  </tr>
                <tr>
                  <td>Std_Dev</td>
                 <td>{data.stdDev.claimsPerItem}</td>
                <td>{data.stdDev.costPerItem}</td>
                  </tr>
               </tbody>
           </Table>
        </div>
   );
};

export default SummaryDataTable;