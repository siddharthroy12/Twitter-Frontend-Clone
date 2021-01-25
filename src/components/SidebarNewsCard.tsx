import './SidebarCard.css'

const SidebarNewsCard = () => {
    return (
        <div className="SidebarCard">
            <div className="sidebar-card-title border-bottom">
                What's Happening
            </div>
            <ul className="sidebar-card-news-list">
                <li className="sidebar-card-news border-bottom">
                    <h5>Television · Yesterday</h5>
                    <h4>Batwoman airing on The CW</h4>
                    <h5>Trending with #batwoman</h5>
                </li>
                <li className="sidebar-card-news border-bottom">
                    <h5>Entertainment · Trending</h5>
                    <h4>#AttackOnTitan</h4>
                    <h5>330K Tweets</h5>
                </li>
                <li className="sidebar-card-news border-bottom">
                    <h5>Pun · Trending</h5>
                    <h4>Bruh</h4>
                    <h5>330K Bruhs</h5>
                </li>
            </ul>
            <div className="sidebar-card-bottom">
                Show more
            </div>
        </div>
    )
}

export default SidebarNewsCard