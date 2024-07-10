import { useState } from "react";
import { Button, FormContainer } from "./Search.styles";
import { Search } from "@mui/icons-material";

type SearchProps = {
  loadPlanet: (planetName: string) => Promise<void>;
};

const SearchComponent = ({ loadPlanet }: SearchProps) => {
  const [planetName, setPlanetName] = useState("");
  return (
    <FormContainer>
      <div>
        <p>Discover all the information about Planets of the Star Wars Saga</p>
        <input
          onChange={(e) => setPlanetName(e.target.value)}
          type="text"
          placeholder="Enter the name in the planet"
        />
        <Button onClick={() => loadPlanet(planetName)}>
          <Search /> Search
        </Button>
      </div>
    </FormContainer>
  );
};

export default SearchComponent;

{
  /* <select>
            <option value="Name" />
            {planets.map((planet) => (
              <option key={planet.name} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select>

          <select>
            <option value="Population" />
            {planets.map((planet) => (
              <option
                key={planet.name}
                value={
                  planet.population == "unknown"
                    ? "Desconhecido"
                    : planet.population
                }
              >
                {planet.population == "unknown"
                  ? "Desconhecido"
                  : planet.population}
              </option>
            ))}
          </select> */
}
