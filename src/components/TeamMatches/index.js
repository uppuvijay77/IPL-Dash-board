// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetials: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      latestMatchDetail: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(formattedData)
    this.setState({teamDetials: formattedData, isLoading: false})
  }

  render() {
    const {teamDetials, isLoading} = this.state
    const {latestMatchDetail, recentMatches, teamBannerUrl} = teamDetials

    return (
      <div className="team-match-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-container">
            <img
              className="banner-image"
              src={teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch latestMatchDetail={latestMatchDetail} />
            <ul>
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetailis={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
