// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link className="team-card" to={`/team-matches/${id}`}>
      <li className="team-details">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <div>
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
