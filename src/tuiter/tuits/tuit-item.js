import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const TuitItem = ( {
    post = {
        "_id": 123, 
        "topic": "Space", 
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",   
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}}) => {
    // const shouldDisplay =   post.cardTitle !== "" && post.cardDescription !== "" && <div className="list-group-item p-0 pt-1">
    //                             <div className="card-body">
    //                                 <h6 className="card-title">{post.cardTitle}</h6>
    //                                 <p className="card-text text-muted">{post.cardDescription}</p>
    //                                 <a href={post.cardLink} className="card-link text-muted text-decoration-none">
    //                                     <i className="fa fa-link"></i>
    //                                     {post.linkHandle}
    //                                 </a>
    //                             </div>
    //                         </div>
    console.log(post)
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`images/${post.image}`} alt = "" className="rounded-circle" height={50} width={50} />
                </div>
                <div className="col">
                    <div>
                        <span>{post.userName}</span>
                        <span className="text-muted">{post.handle}</span>
                        <span className="text-muted"> . {post.time}</span>
                    </div>

                    {/* <div>{post.description}</div> */}

                    {/* <div className="card">
                        <div className="list-group">
                            <div className="list-group-item p-0">
                                <img className="card-img-top" src={`images/${post.cardImage}`} alt="" />
                            </div>

                            {shouldDisplay}
                        </div>
                    </div> */}

                    <div className="text-muted">
                        {post.tuit}
                    </div>

                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <i className="bi bi-chat text-muted">{' '}</i>
                                    <span className="text-muted">{post.replies}</span>
                                </div>
                                <div className="col">
                                    <i className="fa fa-retweet text-muted">{' '}</i>
                                    <span className="text-muted">{post.retuits}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-heart text-muted">{' '}</i>
                                    <span className="text-muted">{post.likes}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-upload text-muted"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-between mt-3">
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
                    </div> */}
                </div>
            </div>
        </div>
    )

}

export default TuitItem;