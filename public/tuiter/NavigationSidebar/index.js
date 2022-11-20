const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="../../../src/tuiter/home" class="list-group-item text-decoration-none ${active == 'home' ? 'active' : ''}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-home"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Home</span>
                    </div>
                </div>
            </a>
            <a href="../ExploreScreen/index.html" class="list-group-item text-decoration-none ${active == 'explore' ? 'active' : ''}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-hashtag"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Explore</span>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-bell"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Notifications</span>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Messages</span>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-bookmark"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Bookmarks</span>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-list"></i> 
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Lists</span>
                    </div>
                </div>
            </a>
                
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">Profile</span>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item text-decoration-none">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-comment-dots"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-block">More</span>
                    </div>
                </div>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="#tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
    `);
}
$(NavigationSidebar);

export default NavigationSidebar;