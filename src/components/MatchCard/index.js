// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetailis} = props
  const data = {
    competingTeam: matchDetailis.competing_team,
    competingTeamLogo: matchDetailis.competing_team_logo,
    matchStatus: matchDetailis.match_status,
    result: matchDetailis.result,
  }
  const {competingTeam, competingTeamLogo, matchStatus, result} = data

  return (
    <li className="match-card-container">
      <img
        className="logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h2>{competingTeam} </h2>
      <p>{matchStatus} </p>
      <p>{result}</p>
    </li>
  )
}
export default MatchCard
