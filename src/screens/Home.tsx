import StarIcon from '../components/icons/StarIcon'
import ImageIcon from '../components/icons/ImageIcon'
import PlayBtnIcon from '../components/icons/PlayBtnIcon'
import BarChartIcon from '../components/icons/BarChartIcon'
import SmileIcon from '../components/icons/SmileIcon'
import CalenderRangeIcon from '../components/icons/CalenderRangeIcon'

import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="title">
                <h1>Home</h1>
                <div className="title-icon">
                    <StarIcon />
                </div>
            </div>
            <div className="new-tweet-form">
                <div className="tweet-form-pf-pic">
                    <img src="https://pbs.twimg.com/profile_images/1347182038084849665/pCz-T1Ze_400x400.jpg"
                        alt="Profile Pic"/>
                </div>
                <div className="tweet-form">
                    <input type="text" placeholder="What's happening?"/>
                    <div className="tweet-form-bottom">
                        <div className="tweet-form-options">
                            <div>
                                <ImageIcon />
                            </div>
                            <div>
                                <PlayBtnIcon />
                            </div>
                            <div>
                                <BarChartIcon />
                            </div>
                            <div>
                                <SmileIcon />
                            </div>
                            <div>
                                <CalenderRangeIcon />
                            </div>
                        </div>
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
            <div className="Spacer">
            </div>
        </div>
    )
}

export default Home