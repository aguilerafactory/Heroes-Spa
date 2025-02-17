import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks"
import { HeroCard } from "../components"

export const SearchPage = () => {
  const navigate = useNavigate();

  const {searchText, onInputChange} = useForm({
    searchText: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1)  return;

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
          <div className="alert alert-info">
            Search a hero
          </div>
          {/* <HeroCard id={} /> */}
      </div>
     </div>
    </>
  )
}
