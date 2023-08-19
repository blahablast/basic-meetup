import Card from '../ui/Card'
import style from './MeetupItem.module.css'

const MeetupItem = (props) => {
  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button></button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
