// components/Filters.js
import React from 'react';
import { uniq } from 'lodash';

const Filters = ({ data, filters, onFilterChange }) => {
  const years = uniq(data.map(item => item.end_year)).filter(Boolean).sort();
  const topics = uniq(data.map(item => item.topic)).filter(Boolean);
  const sectors = uniq(data.map(item => item.sector)).filter(Boolean);
  const regions = uniq(data.map(item => item.region)).filter(Boolean);
  const countries = uniq(data.map(item => item.country)).filter(Boolean);
  const cities = uniq(data.map(item => item.city)).filter(Boolean);
  
  return (
    <div className="filters-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '20px 0' }}>
      <select 
        value={filters.sector} 
        onChange={(e) => onFilterChange('sector', e.target.value)}
      >
        <option value="">All Sectors</option>
        {sectors.map(sector => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>

      <select 
        value={filters.region} 
        onChange={(e) => onFilterChange('region', e.target.value)}
      >
        <option value="">All Regions</option>
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>

      <select 
        value={filters.end_year} 
        onChange={(e) => onFilterChange('end_year', e.target.value)}
      >
        <option value="">All Years</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select 
        value={filters.topic} 
        onChange={(e) => onFilterChange('topic', e.target.value)}
      >
        <option value="">All Topics</option>
        {topics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>

      <select 
        value={filters.country} 
        onChange={(e) => onFilterChange('country', e.target.value)}
      >
        <option value="">All Countries</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      <select 
        value={filters.city} 
        onChange={(e) => onFilterChange('city', e.target.value)}
      >
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <select 
        value={filters.pest} 
        onChange={(e) => onFilterChange('pest', e.target.value)}
      >
        <option value="">All PEST</option>
        <option value="Political">Political</option>
        <option value="Economic">Economic</option>
        <option value="Social">Social</option>
        <option value="Technological">Technological</option>
      </select>

      <select 
        value={filters.swot} 
        onChange={(e) => onFilterChange('swot', e.target.value)}
      >
        <option value="">All SWOT</option>
        <option value="Strengths">Strengths</option>
        <option value="Weaknesses">Weaknesses</option>
        <option value="Opportunities">Opportunities</option>
        <option value="Threats">Threats</option>
      </select>
    </div>
  );
};

export default Filters;