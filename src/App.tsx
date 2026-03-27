import { BrowserRouter as Router,Route,Routes,Link } from 'react-router';
import Home from './Home'
import Original from './Original'
import Equipo from './Equipo'
import Informativa from './Informativa'
import Usuario from './Usuario'
import Favoritos from './Favoritos'
import "./App.css"

function App() {
  

  return (
    <>
<Router>
<nav className="c-menu">
<Link to="/favoritos">Favoritos</Link>
<Link to="/original">Original</Link>
<Link to="/informativa">Informativa</Link>
<Link to="/usuario">Usuario</Link>
<Link to="/">Home</Link>
</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/original" element={<Original/>}/>
<Route path="/favoritos" element={<Favoritos/>}/>
<Route path="/informativa" element={<Informativa/>}/>
<Route path="/usuario" element={<Usuario/>}/>
<Route path="/equipo/:equipo" element={<Equipo/>}/>
</Routes>
</Router>
</>
)
}

export default App
