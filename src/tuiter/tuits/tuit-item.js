import { useDispatch } from "react-redux";
import React from "react";
import { deleteTuit } from "./tuits-reducer";
import 'font-awesome/css/font-awesome.min.css';

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    let likedClass = tuit.liked?"bi bi-heart-fill text-danger":"bi bi-heart"
    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`images/${tuit.image}`} alt = "" className="rounded-circle" height={50} width={50} />
                </div>
                <div className="col">
                    <div>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span>{tuit.userName}</span>
                        <span className="text-muted">{tuit.handle}</span>
                        <span className="text-muted"> . {tuit.time}</span>
                    </div>

                    <div className="text-muted">
                        {tuit.tuit}
                    </div>

                    <div className="list-group">
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col">
                                    <i className="bi bi-chat text-muted">{' '}</i>
                                    <span className="text-muted">{tuit.replies}</span>
                                </div>
                                <div className="col">
                                    <i className="fa fa-retweet text-muted">{' '}</i>
                                    <span className="text-muted">{tuit.retuits}</span>
                                </div>
                                <div className="col">
                                    <i className={likedClass}></i>
                                    <span className="text-muted">{tuit.likes}</span>
                                </div>
                                <div className="col">
                                    <i className="bi bi-upload text-muted"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuitItem;