import MeetupItem from './MeetupItem'
import style from './MeetupList.module.css'

const MeetupList = (props) => {
  return (
    <ul className={style.list}>
      {/* meetups here is something we named. Can be named anything */}
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
      {/* After you finish this mapping, go back to AllMeetups.jsx */}
    </ul>
  )
}

export default MeetupList
