// src/components/layout/MainContent.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import useData from '../../hooks/useData';
import LoadingSpinner from '../ui/LoadingSpinner';
import SearchBar from '../filters/SearchBar';
import DropdownFilter from '../filters/DropdownFilter';
import styles from './MainContent.module.css'
import CategorySection from './CategorySection';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import { calculateAverage, calculateTotal, calculatePercentage, calculateRiskScore } from '../../utils/calculations'

const MainContent = ({ children }) => {
    const { data, loading, error, originalData } = useData();
     const location = useLocation();
     const category = location.pathname.slice(1) || 'geography';
    const geographyColumns =  [
         { key: "item", label: "State" },
        { key: "claims", label: "Claims" },
         { key: "totalPaid", label: "Total Paid" },
         { key: "averagePerClaim", label: "Average Per Claim" },
         {key: "percentClaims", label: "% Claims"},
       {key: "percentCosts", label:"% Costs"},
         {key: "riskScore", label: "Risk Score"}
    ]
     const driverColumns =  [
           { key: "item", label: "Driver" },
            { key: "claims", label: "Claims" },
            { key: "totalPaid", label: "Total Paid" },
          { key: "averagePerClaim", label: "Average Per Claim" },
            {key: "percentClaims", label: "% Claims"},
          {key: "percentCosts", label:"% Costs"},
           {key: "riskScore", label: "Risk Score"}
   ]
   const conditionColumns =  [
        { key: "item", label: "Condition" },
         { key: "claims", label: "Claims" },
          { key: "totalPaid", label: "Total Paid" },
         { key: "averagePerClaim", label: "Average Per Claim" },
          {key: "percentClaims", label: "% Claims"},
           {key: "percentCosts", label:"% Costs"},
           {key: "riskScore", label: "Risk Score"}
     ]
   const claimTypeColumns =  [
         { key: "item", label: "Claim Type" },
          { key: "claims", label: "Claims" },
        { key: "totalPaid", label: "Total Paid" },
        { key: "averagePerClaim", label: "Average Per Claim" },
        {key: "percentClaims", label: "% Claims"},
        {key: "percentCosts", label:"% Costs"},
          {key: "riskScore", label: "Risk Score"}
   ]
   const filteredData = originalData?.filter((item) =>  item.category === category);

   const calculateSummaryData = (data) => {
    if (!data || data.length === 0) return {
        mean: { claimsPerItem: 0, costPerItem: 0 },
        median: { claimsPerItem: 0, costPerItem: 0 },
        stdDev: { claimsPerItem: 0, costPerItem: 0 }
    };

    const claimsPerItem = data.map(item => item.claims);
    const costPerItem = data.map(item => item.totalPaid);
    
    // Calculate means first
    const claimsMean = calculateAverage(data, "claims");
    const costMean = calculateAverage(data, "totalPaid");
    
    // Calculate standard deviations
    const claimsStdDev = Math.sqrt(
        claimsPerItem.reduce((sum, claim) => 
            sum + Math.pow(claim - claimsMean, 2), 0) / claimsPerItem.length
    );
    
    const costStdDev = Math.sqrt(
        costPerItem.reduce((sum, cost) => 
            sum + Math.pow(cost - costMean, 2), 0) / costPerItem.length
    );

    return {
        mean: {
            claimsPerItem: claimsMean,
            costPerItem: costMean
        },
        median: {
            claimsPerItem: data[Math.floor(data.length/2)].claims,
            costPerItem: data[Math.floor(data.length/2)].totalPaid
        },
        stdDev: {
            claimsPerItem: claimsStdDev,
            costPerItem: costStdDev
        }
    };
}

      return (
        <Container className={styles.mainContent}>
           {loading && <LoadingSpinner />}
          {error && <p>Error: {error}</p>}

        {
          category === 'geography' && (
              <CategorySection
               title="Geography"
                data = {data}
                calculateSummaryData = {calculateSummaryData}
               filterData= {filteredData}
               columns={geographyColumns}
                 charts= {true}
                >
                {originalData && <SearchBar data = {filteredData}/> }
                {originalData && <DropdownFilter label= "Filter by State" data= {filteredData} options={filteredData.map(item => item.item)} filterKey ="item" /> }
             </CategorySection>
         )
     }
         {
            category === 'driver' && (
               <CategorySection
                    title="Driver"
                    calculateSummaryData = {calculateSummaryData}
                    data = {data}
                   filterData= {filteredData}
                    columns={driverColumns}
                   charts = {true}
                 >
                  {originalData && <SearchBar data = {filteredData}/> }
                  {originalData && <DropdownFilter  label= "Filter by Driver" data= {filteredData} options={filteredData.map(item => item.item)} filterKey ="item" /> }
                 </CategorySection>
           )
        }
      {
         category === 'condition' && (
                 <CategorySection
                     title="Condition"
                      data = {data}
                      calculateSummaryData = {calculateSummaryData}
                    filterData= {filteredData}
                     columns={conditionColumns}
                    charts = {true}
                   >
                      {originalData && <SearchBar data = {filteredData}/> }
                      {originalData && <DropdownFilter label = "Filter by Condition" data={filteredData} options={filteredData.map(item => item.item)}  filterKey ="item"/> }
                </CategorySection>
          )
       }
         {
           category === 'claim-type' && (
                <CategorySection
                    title="Claim Type"
                     data = {data}
                     calculateSummaryData = {calculateSummaryData}
                    filterData= {filteredData}
                    columns={claimTypeColumns}
                   charts = {true}
                  >
                    {originalData &&  <SearchBar data = {filteredData}/> }
                   {originalData && <DropdownFilter  label = "Filter by Claim Type" data = {filteredData} options={filteredData.map(item => item.item)} filterKey ="item"/>}
                </CategorySection>
           )
        }
          {children}
          <Footer/>
       </Container>
     );
};

export default MainContent;