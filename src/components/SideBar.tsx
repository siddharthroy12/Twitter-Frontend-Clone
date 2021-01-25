import SearchBar from './SearchBar'
import SideBarCard from './SidebarCard'
import './SideBar.css'

const SideBar = () => {
    
    return (
        <div className="SideBar">
            <div className="sidebar-title sidebar-container">
                <SearchBar />
            </div>
            <div className="sidebar-container sidebar-content">
                <SideBarCard />
            </div>
        </div>
    )
}

export default SideBar