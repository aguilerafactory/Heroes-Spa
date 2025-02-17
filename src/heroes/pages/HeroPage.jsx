import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers';


export const HeroPage = () => {

  const { id } = useParams();

  const hero = useMemo( () => getHeroeById(id), [id] );
  
  if(!hero) {
    return <Navigate to='/' />
  }
  

  return (
    <div className='row mt-5 animate__animated animate__bounce'>
      <div className="col-4">
        <img className='img-thumbnail' src={`/assets/heroes/${ id }.jpg`} alt='{ id }' />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> { hero.alter_ego }</li>
          <li className='list-group-item'><b>Publisher:</b> { hero.publisher }</li>
          <li className='list-group-item'><b>First appearance:</b> { hero.first_appearance }</li>
        </ul>
        <div className='mt-3'>
          {
              ( hero.alter_ego !== hero.characters )
              && <><h5>Characters</h5><p className='card-text'>{ hero.characters }</p></>
          }
        </div>
        <button className='btn btn-outline-info' onClick={() => window.history.back()}>Return</button>
      </div>
    </div>
  )
}
