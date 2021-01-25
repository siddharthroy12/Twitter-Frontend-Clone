import './SidebarCard.css'

const SidebarCard = () => {
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
            </ul>
            <div className="sidebar-card-bottom">
                Show more
            </div>
        </div>
    )
}

export default SidebarCard