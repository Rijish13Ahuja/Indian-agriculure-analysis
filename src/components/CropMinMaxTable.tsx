import React from 'react';
import { Table } from '@mantine/core';
import cropData from '../data/Manufac _ India Agro Dataset.json';
import { CropData, CropMaxMin } from '../types/index';
import '../index.css';

const CropMaxMinTable: React.FC = () => {
  const data = cropData as CropData[];

  const yearMap = new Map<string, { max: CropData; min: CropData }>();

  data.forEach((crop) => {
    const year = crop.Year;
    if (!yearMap.has(year)) {
      yearMap.set(year, { max: crop, min: crop });
    } else {
      const yearData = yearMap.get(year)!;
      if (crop["Crop Production (UOM:t(Tonnes))"] > yearData.max["Crop Production (UOM:t(Tonnes))"]) {
        yearData.max = crop;
      }
      if (crop["Crop Production (UOM:t(Tonnes))"] < yearData.min["Crop Production (UOM:t(Tonnes))"]) {
        yearData.min = crop;
      }
    }
  });

  const maxMinData: CropMaxMin[] = Array.from(yearMap.entries()).map(([year, { max, min }]) => ({
    Year: year,
    MaxProductionCrop: max["Crop Name"],
    MinProductionCrop: min["Crop Name"],
  }));

  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>
        {maxMinData.map((item) => (
          <tr key={item.Year}>
            <td>{item.Year}</td>
            <td>{item.MaxProductionCrop}</td>
            <td>{item.MinProductionCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropMaxMinTable;
