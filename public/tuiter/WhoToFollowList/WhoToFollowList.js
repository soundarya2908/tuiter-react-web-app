import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <div class="list-group-item">
                <div class="font-weight-bold text-white">Who to follow</div>
            </div>
            ${
                whos.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
    `); 
}

export default WhoToFollowList; 