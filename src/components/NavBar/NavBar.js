
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
    <div className="navBar">
        <div>
            logo
        </div>
        <div>
            <ul className='options'>
                <li>Todo</li>
                <li>Pantalones</li>
                <li>Camisas</li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar