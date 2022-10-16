const PostItem = (post)=>{
    let shouldShow = (post.cardTitle != "" && post.cardDescription != "" && post.cardLink != "")? 
        `<div class="list-group-item p-0 pt-1">
            <div class="card-body bg-black">
                <h6 class="card-title">${post.cardTitle}</h6>
                <p class="card-text text-muted">${post.cardDescription}</p>
                <a href=${post.cardLink} class="card-link text-muted text-decoration-none">
                    <i class="fa fa-link"></i>
                    ${post.linkHandle}
                </a>
            </div>
        </div>` : 
        "";
        
    return(`
        <div class="list-group-item bg-black mb-1 border-bottom border-secondary">
            <div class="row">
                <div class="col-2">
                    <img src=${post.profileImage} class="img-fluid rounded-pill wd-images-to-follow">
                </div>
                <div class="col">
                    <div>
                        <span class="font-weight-bold">${post.userName}</span>
                        <span class="text-muted">@${post.handle}</span>
                        <span class="text-muted"> - ${post.time}</span>
                    </div>

                    <div class="text-white">${post.description}</div>

                    <div class="card">
                        <div class="list-group">
                            <div class="list-group-item p-0">
                                <img class="card-img-top" src=${post.cardImage}>
                            </div>

                            ${shouldShow}
                        </div>
                    </div>

                    <div class="d-flex justify-content-between mt-3">
                        <span>
                            <i class="fa-regular fa-comment text-muted"></i>
                            <span class="text-muted">${post.comments}</span>
                        </span>
                        <span>
                            <i class="fa fa-retweet text-muted"></i>
                            <span class="text-muted">${post.retweets}</span>
                        </span>
                        <span>
                            <i class="fa-regular fa-heart text-muted"></i>
                            <span class="text-muted">${post.likes}</span>
                        </span>
                        <span>
                            <i class="fa fa-arrow-up-from-bracket text-muted"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export default PostItem;