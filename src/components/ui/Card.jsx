import style from './Card.module.css'

const Card = (props) => {
  // This is a wrapper component. Explain what that means
  // Children is a special prop that every component has
  return <div className={style.card}>{props.children}</div>
}

export default Card
