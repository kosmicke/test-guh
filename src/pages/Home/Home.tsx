import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Search, Tune } from "@mui/icons-material";

import { useAppContext } from "../../context/planetsContext";
import marsCollage from "../../assets/mars-collage.png";
import spaceship from "../../assets/spaceship.png";
import { Planet } from "../../services/planets/model";
import { SearchBy } from "./types";
import {
  FormContainer,
  Wrapper,
  WrapperContent,
  Button,
  DivNav,
  FilterSelectContainer,
  ResponsiveForm,
} from "./Home.styles";

interface SearchForm {
  value: string;
  searchBy: SearchBy;
}

const defaultValues: SearchForm = {
  value: "",
  searchBy: "name",
};

function Home() {
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

  const { planets, isLoading, selectPlanet } = useAppContext();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<SearchForm>({
    defaultValues,
  });

  const onSubmit = (data: SearchForm) => {
    if (!data.value) {
      setFilteredPlanets(planets);
      return;
    }

    if (data.searchBy === "name") {
      const newFilteredPlanets = planets.filter((planet) =>
        planet.name.toLowerCase().includes(data.value.toLowerCase())
      );

      setFilteredPlanets(newFilteredPlanets);
      return;
    }

    if (data.searchBy === "population") {
      const newFilteredPlanets = planets.filter(
        (planet) => planet.population === data.value
      );

      setFilteredPlanets(newFilteredPlanets);
    }
  };

  const handlePlanetSelect = (planetId: string) => {
    selectPlanet(planetId);
    navigate("/detail");
  };

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  return (
    <>
      <Wrapper>
        <WrapperContent>
          <img src={marsCollage} alt="" />
          <DivNav>
            <img src={spaceship} alt="Nave" />
          </DivNav>
        </WrapperContent>

        <FormContainer>
          <div>
            <p>
              Discover all the information about Planets of the Star Wars Saga
            </p>
            <ResponsiveForm>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("value")}
                  type="text"
                  placeholder="Enter the name in the planet"
                />
                <Button type="submit">
                  <Search /> Search
                </Button>

                {/* implementar filter  */}
                {/* <ResponsiveContainer> */}
                <FilterSelectContainer>
                  <Tune />
                  Filter
                  <label>
                    Name
                    <input
                      type="radio"
                      value="name"
                      {...register("searchBy")}
                    />
                  </label>
                  <label>
                    Population
                    <input
                      type="radio"
                      value="population"
                      {...register("searchBy")}
                    />
                  </label>
                </FilterSelectContainer>
                {/* </ResponsiveContainer> */}
              </form>
            </ResponsiveForm>
            {isLoading && <p>Loading...</p>}

            {!isLoading && filteredPlanets.length === 0 && (
              <p>No planet found</p>
            )}

            {!isLoading && filteredPlanets.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlanets.map((planet) => (
                    <tr key={planet.name}>
                      <td>{planet.id}</td>
                      <td>{planet.name}</td>
                      <td>{planet.population}</td>
                      <td>
                        <button onClick={() => handlePlanetSelect(planet.id)}>
                          Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </FormContainer>
      </Wrapper>
    </>
  );
}

export default Home;
