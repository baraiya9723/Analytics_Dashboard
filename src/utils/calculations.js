// src/utils/calculations.js

export const calculateAverage = (arr, property) => {
  if (!arr || arr.length === 0) return 0;
  const sum = arr.reduce((acc, item) => acc + item[property], 0);
  return sum / arr.length;
};

export const calculateTotal = (arr, property) => {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((acc, item) => acc + item[property], 0);
};

export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

export const calculateRiskScore = (value, mean, stdDev) => {
  if (stdDev === 0) return 0;
  return (value - mean) / stdDev;
};
