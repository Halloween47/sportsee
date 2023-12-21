import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
      <header>
        <img src={ Logo } alt="" />
        <nav> 
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/">Profil</Link>
            </li>
            <li>            
              <Link to="/">Réglage</Link>
            </li>
            <li>            
              <Link to="/">Communauté</Link>
            </li>            
          </ul>
          </nav>
      </header>   
    )
  }
  
  export default Header