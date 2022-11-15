import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const PostItem = ( {
    post = {
        "profileImage" : "elonMuskProfile.jpg",
        "userName" : "Elon Musk",
        "handle" : "elonmusk",
        "time" : "23h",
        "description" : "Amazing show about @inspiration4x mission!",
        "cardImage" : "inspiration4x.jpg",
        "cardTitle" : "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "cardDescription" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
        "cardLink" : "https://www.netflix.com/search?q=inspiration&jbv=81441273",
        "linkHandle" : "netflix.com",
        "comments" : "4.2k",
        "retweets" : "3.5k",
        "likes" : "37.5k"
}}) => {
    const shouldDisplay =   post.cardTitle !== "" && post.cardDescription !== "" && <div className="list-group-item p-0 pt-1">
                                <div className="card-body">
                                    <h6 className="card-title">{post.cardTitle}</h6>
                                    <p className="card-text text-muted">{post.cardDescription}</p>
                                    <a href={post.cardLink} className="card-link text-muted text-decoration-none">
                                        <i className="fa fa-link"></i>
                                        {post.linkHandle}
                                    </a>
                                </div>
                            </div>
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`images/${post.profileImage}`} alt = "" className="rounded-circle" height={50} width={50} />
                </div>
                <div className="col">
                    <div>
                        <span>{post.userName}</span>
                        <span className="text-muted">@{post.handle}</span>
                        <span className="text-muted"> . {post.time}</span>
                    </div>

                    <div>{post.description}</div>

                    <div className="card">
                        <div className="list-group">
                            <div className="list-group-item p-0">
                                <img className="card-img-top" src={`images/${post.cardImage}`} alt="" />
                            </div>

                            {shouldDisplay}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <span>
                            <i className="bi bi-chat text-muted">{' '}</i>
                            <span className="text-muted">{post.comments}</span>
                        </span>
                        <span>
                            <i className="fa fa-retweet text-muted">{' '}</i>
                            <span className="text-muted">{post.retweets}</span>
                        </span>
                        <span>
                            <i className="bi bi-heart text-muted">{' '}</i>
                            <span className="text-muted">{post.likes}</span>
                        </span>
                        <span>
                            <i className="bi bi-upload text-muted"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostItem;