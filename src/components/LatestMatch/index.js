// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetail} = props
  const formattedData = {
    competingTeam: latestMatchDetail.competing_team,
    competingTeamLogo: latestMatchDetail.competing_team_logo,
    date: latestMatchDetail.date,
    firstInnings: latestMatchDetail.first_innings,
    manOftheMatch: latestMatchDetail.man_of_the_match,
    matchStatus: latestMatchDetail.match_status,
    result: latestMatchDetail.result,
    secondInnings: latestMatchDetail.second_innings,
    umpires: latestMatchDetail.umpires,
    venue: latestMatchDetail.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOftheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = formattedData
  return (
    <div className="latest-match-container">
      <div className="left">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div>
        <p>first Innings</p>
        <p>{firstInnings}</p>
        <p>second innings</p>
        <p>{secondInnings}</p>
        <p>Man of the match</p>
        <p>{manOftheMatch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
