// components/Charts.js
import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';

export const SectorChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      data: Object.values(data),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
      ]
    }]
  };

  return <Pie data={chartData} />;
};

export const IntensityChart = ({ data }) => {
  const chartData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [{
      label: 'Intensity Distribution',
      data: data,
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
    }]
  };

  return <Bar data={chartData} />;
};

export const LikelihoodChart = ({ data }) => {
  const chartData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [{
      label: 'Likelihood Distribution',
      data: data,
      backgroundColor: '#4BC0C0'
    }]
  };

  return <Bar data={chartData} />;
};

export const RelevanceChart = ({ data }) => {
  const chartData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [{
      label: 'Relevance Distribution',
      data: data,
      backgroundColor: '#9966FF'
    }]
  };

  return <Bar data={chartData} />;
};

export const YearTrendChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      label: 'Trends by Year',
      data: Object.values(data),
      borderColor: '#FF9F40',
      fill: false
    }]
  };

  return <Line data={chartData} />;
};