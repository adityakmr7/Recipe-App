import React, { useState, useReducer, useEffect } from "react";
import { catArr, popularArr } from "../dummy_data/categories_data";
interface AppProviderProps {}

type category = {
  id: number;
  image: any;
  name: string;
};
type popular = {
  id: number;
  image: any;
  name: string;
  time: number;
  level: string;
};
export const AppContext = React.createContext<{
  catArr: category[];
  popularArr: popular[];
}>({
  catArr,
  popularArr,
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        catArr,
        popularArr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
