"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  todo: string;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<[] | DataType[]>([]);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
