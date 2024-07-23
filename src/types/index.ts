export interface CropData {
    Country: string;
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": number;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number;
    "Area Under Cultivation (UOM:Ha(Hectares))": number;
  }
  
  export interface CropMaxMin {
    Year: string;
    MaxProductionCrop: string;
    MinProductionCrop: string;
  }
  
  export interface CropAverage {
    CropName: string;
    AverageYield: number;
    AverageCultivationArea: number;
  }
  