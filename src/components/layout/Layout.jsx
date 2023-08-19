import Nav from './Nav'
import style from './Layout.module.css'

const Layout = (props) => {
  // Cut Nav from App.js and put it in here
  // after you add Layout to App.js you need to accept children here.
  return (
    <div>
      <Nav />
      <main className={style.main}>{props.children}</main>
    </div>
  )
}
export default Layout
