import pokeLogo from '../assets/pokemon-logo-png-1428.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="bg-red-600">
            <ul className='flex p-2 items-center text-white justify-between font-sigmar mb-10'>
                <img className='h-10 w-15' src={pokeLogo}></img>
                <Link to="/"><li>Pokédex</li></Link> 
                <Link to="/espace-dresseur"><li>Espace dresseur</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;