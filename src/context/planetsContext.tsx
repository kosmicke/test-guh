import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Planet } from "../services/planets/model";
import { getPlanets } from "../services/planets/getPlanets";

interface AppContextType {
  //   planets: Planet[];
  searchPlanets: (name: string) => Planet[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  const searchPlanets = (name: string) => {
    return planets.filter((planet) => planet.name.includes(name));
  };

  useEffect(() => {
    getPlanets()
      .then((data) => setPlanets(data || []))
      .catch((err) => {
        console.log("erro", err);
        window.alert("Erro ao carregar planetas");
      });
  }, []);

  return (
    <AppContext.Provider value={{ searchPlanets }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
