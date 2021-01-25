import SearchBar from './SearchBar'
import SideBarNewsCard from './SidebarNewsCard'
import SidebarFollowCard from './SideBarFollowCard'
import './SideBar.css'

const SideBar = () => {
    
    return (
        <div className="SideBar">
            <div className="sidebar-title sidebar-container">
                <SearchBar />
            </div>
            <div className="sidebar-container sidebar-content">
                <SideBarNewsCard />
                <SidebarFollowCard />
                <div className="sidebar-footer">
                    <a
                        href="https://github.com/siddharthroy12/Twitter-Frontend-Clone"
                        target="_blank"
                        rel="noreferrer">
                        Github
                    </a>
                    <a
                        href="https://twitter.com/Siddharth_Roy12"
                        target="_blank"
                        rel="noreferrer">
                        Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/siddharthroy12/"
                        target="_blank"
                        rel="noreferrer">
                        Instagram
                    </a>
                    <a
                        href="https://siddharthroy.pythonanywhere.com"
                        target="_blank"
                        rel="noreferrer">
                        Onlyfans
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar