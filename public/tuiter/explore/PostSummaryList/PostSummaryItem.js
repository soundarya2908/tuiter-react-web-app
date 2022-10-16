const PostSummaryItem = (post)=>{
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col">
                    <div class="text-muted">
                        ${post.topic}
                    </div>
                    <div>
                        <span class="font-weight-bold">
                            ${post.userName}
                        </span>
                        <span class="text-muted">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="h6">
                        ${post.title}
                    </div>
                </div>
                <div class="col-2 align-self-center">
                    <div class="wd-images-to-follow">
                        <img src=${post.image} class="img-fluid rounded-pill">
                    </div>
                </div>
            </div>
        </div>
    `)
}

export default PostSummaryItem;