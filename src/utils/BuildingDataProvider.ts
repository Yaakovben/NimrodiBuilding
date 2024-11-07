import { useState, useEffect } from 'react';
import data from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    console.log(data[floorIndex]);
    return data[floorIndex]
    
  }
  getFloorByIndex(2)


  const getListOfActivities = ():string[]=>{
    return data.map(d => d.activity)
  }
 

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
