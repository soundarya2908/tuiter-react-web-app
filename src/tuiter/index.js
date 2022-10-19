import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
    return(
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <h1>Tuiter</h1>
        </div>
    );
}

export default Tuiter;