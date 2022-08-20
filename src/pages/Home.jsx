import { NavLink } from 'react-router-dom';
import '../styles/Home.scss';

export const Home = () => {
  return (
    <div className="Home">
      <div className="item">
        <div className="block image posts">
          <h1>Posts</h1>
        </div>
        <div className='block text'>
          <p>Encuentra los post mas interesantes y disfruta de horas y horas de contenido.</p>
          <NavLink to="posts">
            <span>Ver posts...</span>
          </NavLink>
        </div>
      </div>
      
      <div className="item">
        <div className="block image todos">
          <h1>ToDo's</h1>
        </div>
        <div className='block text'>
          <p>Encuentra desafios diarios y mas tareas propuestas por hacer.</p>
          <NavLink to="todos">
            <span>Ver ToDo's...</span>
          </NavLink>
        </div>
      </div>

      <div className="item">
        <div className="block image gallery">
          <h1>Gallery</h1>
        </div>
        <div className='block text'>
          <p>La mejor galeria fotografica que puedas encontrar.</p>
          <NavLink to="todos">
            <span>Ver fotos...</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
