import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col mb-2">
                    <input type="text" class="form-control rounded-pill" placeholder="&#xF002; Search Tuiter" style="font-family:Arial, FontAwesome">
                </div>
                <div class="col-1 align-self-center">
                    <i class="fa fa-cog fa-2x active" style="color:rgb(11, 93, 234)"></i> 
                </div>
            </div>
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#news.html">News</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-xl-block">
                    <a class="nav-link" href="#entertainment.html">Entertainment</a>
                </li>
            </ul>
           
            <div class="card">
                <img class="card-img" src="../../images/starship.jpg">
                <div class="card-img-overlay d-flex align-items-end">
                    <h3 class="text-stroke text-white font-weight-bold">
                        SpaceX's Starship
                    </h3>
                </div>
            </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
