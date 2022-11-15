import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href = "#tuiter" className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>&nbsp;
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>&nbsp;
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk"></i>&nbsp;
                Labs
            </Link>
            <a href = "#tuiter/notifications" className={`list-group-item
                            ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>&nbsp;
                Notifications
            </a>
            <a href = "#tuiter/messages" className={`list-group-item
                            ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>&nbsp;
                Messages
            </a>
            <a href = "#tuiter/bookmarks" className={`list-group-item
                            ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>&nbsp;
                Bookmarks
            </a>
            <a href = "#tuiter/lists" className={`list-group-item
                            ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i>&nbsp;
                Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>&nbsp;
                Profile
            </Link>
            <a href = "#tuiter/more" className={`list-group-item
                            ${active === 'more'?'active':''}`}>
                <i className="bi bi-plus-circle-fill"></i>&nbsp;
                More
            </a>
        </div>
      );
}

export default NavigationSidebar;