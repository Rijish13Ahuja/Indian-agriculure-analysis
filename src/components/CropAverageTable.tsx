import React from 'react';
import { Table } from '@mantine/core';
import cropData from '../data/Manufac _ India Agro Dataset.json';
import { CropData, CropAverage } from '../types/index';
import '../index.css';

const CropAverageTable: React.FC = () => {
  const data = cropData as CropData[];

  const cropMap = new Map<string, { totalYield: number; totalArea: number; count: number }>();

  data.forEach((crop) => {
    const cropName = crop["Crop Name"];
    if (!cropMap.has(cropName)) {
      cropMap.set(cropName, { totalYield: crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"], totalArea: crop["Area Under Cultivation (UOM:Ha(Hectares))"], count: 1 });
    } else {
      const cropData = cropMap.get(cropName)!;
      cropData.totalYield += crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
      cropData.totalArea += crop["Area Under Cultivation (UOM:Ha(Hectares))"];
      cropData.count += 1;
    }
  });

  const averageData: CropAverage[] = Array.from(cropMap.entries()).map(([cropName, { totalYield, totalArea, count }]) => ({
    CropName: cropName,
    AverageYield: parseFloat((totalYield / count).toFixed(3)),
    AverageCultivationArea: parseFloat((totalArea / count).toFixed(3)),
  }));

  return (
    <Table>
      <thead>
        <tr>
          <th>Crop Name</th>
          <th>Average Yield (Kg/Ha)</th>
          <th>Average Cultivation Area (Ha)</th>
        </tr>
      </thead>
      <tbody>
        {averageData.map((item) => (
          <tr key={item.CropName}>
            <td>{item.CropName}</td>
            <td>{item.AverageYield}</td>
            <td>{item.AverageCultivationArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropAverageTable;
