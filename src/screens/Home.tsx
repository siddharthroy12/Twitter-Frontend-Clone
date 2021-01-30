import Tweet from '../components/Tweet'
import StarIcon from '../components/icons/StarIcon'
import ImageIcon from '../components/icons/ImageIcon'
import PlayBtnIcon from '../components/icons/PlayBtnIcon'
import BarChartIcon from '../components/icons/BarChartIcon'
import SmileIcon from '../components/icons/SmileIcon'
import CalenderRangeIcon from '../components/icons/CalenderRangeIcon'
import './Home.css'

const fake_tweets = [
    {
        userName: "Siddharth Roy",
        username: "Siddharth_Roy12",
        profilePic: "/img/profilepic.jpg",
        content: "Bruh",
        img: "https://pbs.twimg.com/media/EsjoHFjVkAAQ53y?format=png&name=small",
        comments: 43,
        retweets: 2312,
        likes: 23,
        postedAt: '12h',
        replyingTo: ''
    },
    {
        userName: "Siddharth Roy",
        username: "Siddharth_Roy12",
        profilePic: "/img/profilepic.jpg",
        content: "Bruh",
        img: "https://pbs.twimg.com/media/EsjoHFjVkAAQ53y?format=png&name=small",
        comments: 43,
        retweets: 2312,
        likes: 23,
        postedAt: '12h',
        replyingTo: ''
    }
]

const Home = () => {
    return (
        <div className="Home">
            <div className="title border-bottom">
                <h1>Home</h1>
                <div className="title-icon">
                    <StarIcon />
                </div>
            </div>
            <div className="new-tweet-form">
                <div className="tweet-form-pf-pic">
                    <img src="/img/profilepic.jpg"
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
                            <div className="poll-icon">
                                <BarChartIcon />
                            </div>
                            <div>
                                <SmileIcon />
                            </div>
                            <div className="event-icon">
                                <CalenderRangeIcon />
                            </div>
                        </div>
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
            <div className="Spacer">
            </div>
            {
                fake_tweets.map(tweet => (
                    <Tweet tweet={tweet} />
                ))
            }
        </div>
    )
}

export default Home