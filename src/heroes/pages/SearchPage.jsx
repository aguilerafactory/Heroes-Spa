import { useLocation, useNavigate } from "react-router-dom";
import  queryString  from 'query-string';
import { useForm } from "../../hooks"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const {hero = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName( hero );

  const showHero = (hero.length === 0);
  const showHeroNotFound = (heroes.length === 0 && hero.length > 1); 

  const {searchText, onInputChange} = useForm({
    searchText: hero,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // if(searchText.trim().length <= 1)  return;

    navigate(`?hero=${searchText}`);
  }

  return (
    <>
     <h1>Search</h1>
     <hr />
     <div className="row">
      <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={ handleSearch } >
            <input type="text" placeholder="Find your hero" className="form-control" name="searchText" autoComplete="off" value={ searchText } onChange={ onInputChange } />
            <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search...</button>
          </form>
      </div>
      <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            ( showHero ) && <div className="alert alert-info animate__animated animate__fadeIn">
              Search a hero
            </div>
          }
          {
            ( showHeroNotFound ) && <div className="alert alert-danger animate__animated animate__fadeIn">
              No hero whith <b>{ hero }</b>
            </div>
          }
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } hero={ hero } />
            ))
          }
      </div>
     </div>
    </>
  )
}
