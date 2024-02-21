import {NavLink, Outlet} from 'react-router-dom'

export default function Nav(){
    return(
        <>
            <ul className='nav'>
                <li><NavLink className={({isActive}) => (isActive ? 'active' : 'link')} to='/'>Home</NavLink></li>
                <li><NavLink to='/folio' className={({isActive}) => (isActive ? 'active': 'link')}>Folio</NavLink></li>
                <li><NavLink to='/contact' className={({isActive}) => (isActive ? 'active': 'link')}>Contact</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}