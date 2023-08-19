import { Link } from 'react-router-dom'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
