import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = JSON.parse(fs.readFileSync('./Manufac _ India Agro Dataset.json', 'utf-8'));

const transformedData = rawData.reduce((acc, crop) => {
  const year = crop.Year.split(' ')[3];
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push({
    ...crop,
    "Crop Production (UOM:t(Tonnes))": Number(crop["Crop Production (UOM:t(Tonnes))"]) || 0,
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": Number(crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0,
    "Area Under Cultivation (UOM:Ha(Hectares))": Number(crop["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0,
  });
  return acc;
}, {});

const outputPath = path.join(__dirname, 'transformedData.json');
fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2));

console.log('Data transformation complete. Output saved to transformedData.json');
