import {
  FormContainer,
  Wrapper,
  WrapperContent,
  Button,
  DivNav,
  ResponsiveContainer,
  FilterSelectContainer,
  ResponsiveForm,
} from "./Home.styles";
import { Search, Tune } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/planetsContext";
import { useNavigate } from "react-router-dom";
import marsCollage from "../../assets/mars-collage.png";
import spaceship from "../../assets/spaceship.png";

interface SearchForm {
  name: string;
  population: string;
}

function Home() {
  const { register, handleSubmit } = useForm<SearchForm>();
  const { getPlanetByName, selectPlanet } = useAppContext();

  const navigate = useNavigate();

  const onSubmit = (data: SearchForm) => {
    const foundPlanet = getPlanetByName(data.name);

    if (!foundPlanet) {
      window.alert("Planeta não encontrado.");
    } else {
      selectPlanet(data.name);
      navigate("/detail");
    }
  };

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
                  {...register("name")}
                  type="text"
                  placeholder="Enter the name in the planet"
                />
                <Button type="submit">
                  <Search /> Search
                </Button>

                {/* <ResponsiveContainer> */}
                <FilterSelectContainer>
                  <Tune />
                  Filter
                  <select>
                    <option value="">Name</option>
                    <option value="tatooine">tatooine</option>
                    <option value="tatooine">tatooine</option>
                    <option value="tatooine">tatooine</option>
                  </select>
                  <select disabled>
                    <option value="">Population</option>
                    <option value="20000">20000</option>
                    <option value="200000">200000</option>
                    <option value="2000000">2000000</option>
                  </select>
                </FilterSelectContainer>
                {/* </ResponsiveContainer> */}
              </form>
            </ResponsiveForm>
          </div>
        </FormContainer>
      </Wrapper>
    </>
  );
}

export default Home;
