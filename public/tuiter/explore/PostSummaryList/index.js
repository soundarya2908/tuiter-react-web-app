import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${
                posts.map(post => {
                    console.log('in PostSummaryList')
                    return(PostSummaryItem(post));
                }).join('')
            }
        </ul>
    `)
}

export default PostSummaryList