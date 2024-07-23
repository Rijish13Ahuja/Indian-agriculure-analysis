# Indian Agriculture Analysis

## Overview

This project performs analytics on the Indian Agriculture dataset provided by the National Data and Analytics Platform, NITI Aayog. It displays the results in tables using Mantine v7. The project includes two main analyses:

1. **Crop Production Analysis:** Displays the crop with the maximum and minimum production for each year.
2. **Crop Yield and Cultivation Area Analysis:** Shows the average yield and cultivation area of each crop between 1950 and 2020.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (or use npm)

### Installation

 Clone the repository:
   ```sh
   git clone https://github.com/Rijish13Ahuja/Indian-agriculure-analysis.git
   ```

###Navigating to the Project Directory

#Change to the project directory:
 ```sh
cd Indian-agriculure-analysis
```

 Install dependencies:

    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

### PROJECT STRUCTURE
```sh
src/
├── components/
│   ├── CropMaxMinTable.tsx: Displays the crop production analysis table.
│   ├── CropAverageTable.tsx: Displays the crop yield and cultivation area analysis table.
├── data/
│   └── Manufac_India_Agro_Dataset.json: JSON file containing the dataset.
├── types/
│   └── index.ts: TypeScript types for the project.
├── index.css: CSS file for styling.
```
