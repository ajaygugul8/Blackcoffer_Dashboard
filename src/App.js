// App.js (updated)
import React, { useState, useEffect } from 'react';
import { groupBy } from 'lodash';
import data from './data.json';
import Filters from './components/Filters';
import { 
  SectorChart, 
  IntensityChart, 
  LikelihoodChart, 
  RelevanceChart,
  YearTrendChart 
} from './components/Charts';

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({
    sector: '',
    region: '',
    end_year: '',
    topic: '',
    country: '',
    city: '',
    pest: '',
    swot: ''
  });

  useEffect(() => {
    const filtered = data.filter(item => {
      return (
        (!filters.sector || item.sector === filters.sector) &&
        (!filters.region || item.region === filters.region) &&
        (!filters.end_year || item.end_year === filters.end_year) &&
        (!filters.topic || item.topic === filters.topic) &&
        (!filters.country || item.country === filters.country) &&
        (!filters.city || item.city === filters.city) &&
        (!filters.pest || item.pestle === filters.pest) &&
        (!filters.swot || item.swot === filters.swot)
      );
    });
    setFilteredData(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Data transformations
  const sectorDistribution = groupBy(filteredData, 'sector');
  const sectorCounts = Object.fromEntries(
    Object.entries(sectorDistribution).map(
      ([key, value]) => [key, value.length]
    )
  );

  const intensityDistribution = [
    filteredData.filter(d => d.intensity < 20).length,
    filteredData.filter(d => d.intensity >= 20 && d.intensity < 50).length,
    filteredData.filter(d => d.intensity >= 50).length
  ];

  const likelihoodDistribution = [
    filteredData.filter(d => d.likelihood < 2).length,
    filteredData.filter(d => d.likelihood >= 2 && d.likelihood < 4).length,
    filteredData.filter(d => d.likelihood >= 4).length
  ];

  const relevanceDistribution = [
    filteredData.filter(d => d.relevance < 2).length,
    filteredData.filter(d => d.relevance >= 2 && d.relevance < 4).length,
    filteredData.filter(d => d.relevance >= 4).length
  ];

  const yearTrends = groupBy(filteredData, 'end_year');
  const yearCounts = Object.fromEntries(
    Object.entries(yearTrends)
      .filter(([key]) => key !== 'undefined')
      .map(([key, value]) => [key, value.length])
  );

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      
      <Filters
        data={data}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
        <div>
          <h2>Sector Distribution</h2>
          <SectorChart data={sectorCounts} />
        </div>
        <div>
          <h2>Intensity Distribution</h2>
          <IntensityChart data={intensityDistribution} />
        </div>
        <div>
          <h2>Likelihood Distribution</h2>
          <LikelihoodChart data={likelihoodDistribution} />
        </div>
        <div>
          <h2>Relevance Distribution</h2>
          <RelevanceChart data={relevanceDistribution} />
        </div>
        <div>
          <h2>Year Trends</h2>
          <YearTrendChart data={yearCounts} />
        </div>
      </div>

      <table style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Sector</th>
            <th>Region</th>
            <th>Intensity</th>
            <th>Likelihood</th>
            <th>Relevance</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, 10).map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.sector}</td>
              <td>{item.region}</td>
              <td>{item.intensity}</td>
              <td>{item.likelihood}</td>
              <td>{item.relevance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;