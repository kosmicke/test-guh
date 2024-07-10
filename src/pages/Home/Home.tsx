import { useEffect, useState } from "react";
import { FormContainer, Wrapper, WrapperContent, Button } from "./Home.styles";
import { Search } from "@mui/icons-material";
import { getPlanets } from "../../services/planets/getPlanets";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/planetsContext";
import { Planet } from "../../services/planets/model";

interface SearchForm {
  name: string;
}

function Home() {
  const { register, handleSubmit } = useForm<SearchForm>();
  const [planets, setPlanets] = useState<Planet[]>([]);
  const { searchPlanets } = useAppContext();

  const onSubmit = (data: SearchForm) => {
    const filteredPlanets = searchPlanets(data.name);
    setPlanets(filteredPlanets);
    console.log("onSubmit", data);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Wrapper>
      <WrapperContent>
        {/* Add your background image content here */}
      </WrapperContent>

      <FormContainer>
        <div>
          <p>
            Discover all the information about Planets of the Star Wars Saga
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter the name in the planet"
            />
            <Button type="submit">
              <Search /> Search
            </Button>
          </form>
          <div>
            {planets.map((planet) => (
              <p>{planet.name}</p>
            ))}
          </div>
        </div>
      </FormContainer>
    </Wrapper>
  );
}

export default Home;
