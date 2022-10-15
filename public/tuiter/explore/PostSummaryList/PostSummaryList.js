import PostSummaryItem from "./PostSummaryItem";
import exploreItems from "./exploreItems.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${
                exploreItems.map(item => {
                    return(PostSummaryItem(item));
                }).join('')
            }
        </ul>
    `)
}

export default PostSummaryList