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

    // Base columns configuration
    const baseColumns = [
        { key: "item", label: "" }, // Label will be set dynamically
        { key: "claims", label: "Claims" },
        { key: "totalPaid", label: "Total Paid" },
        { key: "averagePerClaim", label: "Average Per Claim" },
        { key: "percentClaims", label: "% Claims"},
        { key: "percentCosts", label: "% Costs"},
        { key: "riskScore", label: "Risk Score"}
    ];

    // Map category to item label
    const itemLabels = {
        'geography': "State",
        'driver': "Driver",
        'condition': "Condition",
        'claim-type': "Claim Type"
    };

    // Create columns for current category
    const columns = baseColumns.map(col => 
        col.key === "item" 
            ? { ...col, label: itemLabels[category] }
            : col
    );

    const filteredData = originalData?.filter((item) => item.category === category);

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
            
            <CategorySection
                title={itemLabels[category]}
                data={data}
                calculateSummaryData={calculateSummaryData}
                filterData={filteredData}
                columns={columns}
                charts={true}
            >
                {originalData && <SearchBar data={filteredData} />}
                {originalData && (
                    <DropdownFilter
                        label={`Filter by ${itemLabels[category]}`}
                        data={filteredData}
                        options={filteredData?.map(item => item.item)}
                        filterKey="item"
                    />
                )}
            </CategorySection>
            {children}
            <Footer />
        </Container>
    );
};

export default MainContent;