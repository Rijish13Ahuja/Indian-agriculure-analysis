import React from 'react';
import { MantineProvider } from '@mantine/core';
import CropMaxMinTable from './components/CropMinMaxTable';
import CropAverageTable from './components/CropAverageTable';
import "../index.css";

const App: React.FC = () => {
  return (
     <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <h1>Crop Analytics</h1>
        <h2>Crop Production Analysis</h2>
        <CropMaxMinTable />
        <h2>Crop Yield and Cultivation Area Analysis</h2>
        <CropAverageTable />
      </div>
     </MantineProvider>
  );
};

export default App;
