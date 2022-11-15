import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profiles)
    
    // const dateFormatter = (date) => {
    //     let year = date.split("/")[2] == null ? date.split("/")[1] : date.split("/")[2]
    //     let month = date.split("/")[0]
    //     let day = date.split("/")[1] > 31 ? null : date.split("/")[1]
    //     let dob = new Date(year, month-1, day);
    //     const options = { month: 'long'};
    //     let returnDate = [
    //         day,
    //         month = new Intl.DateTimeFormat('en-US', options).format(dob),
    //         year
    //     ]
    //     return(returnDate)
    // }
    
    // console.log(profile);
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <i className="bi bi-arrow-left me-3"></i>
                        </div>
                        <div className="col">
                            <div style={{fontWeight: 'bold'}}>{profile.name}</div>
                            <div className="text-muted">{profile.tuits} tuits</div>
                        </div>
                    </div>
                    <div className="row">
                        <img src={`../images/${profile.bannerPicture}`} alt="" />
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <img className="wd-image-overlap w-25 rounded-pill" src={`../images/${profile.profilePicture}`} alt="" />
                        </div>
                        <div className="col">
                            <Link to="/tuiter/edit-profile">
                                <button className="rounded-pill float-end mt-2 ps-3 pe-3 fw-bold">
                                        Edit Profile
                                </button>
                            </Link>
                        </div>
                        <h4>{profile.name}</h4>
                        <div className="text-muted">{profile.handle}</div>
                        <div>{profile.bio}</div>
                        <div className="text-muted">
                            <div className="row">
                                <div className="col">
                                    <i className="bi bi-geo-alt"></i>
                                    {profile.location}  
                                </div>
                                <div className="col">
                                    <i className="bi bi-balloon"></i>
                                    Born: {profile.dateOfBirth}
                                </div>
                                <div className="col">
                                    <i className="bi bi-calendar"></i>
                                    Joined {profile.dateJoined}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span style={{fontWeight: 'bold'}}>{profile.followingCount}</span>
                            <span className="text-muted"> Following&emsp;</span>
                            <span style={{fontWeight: 'bold'}}>{profile.followersCount}</span>
                            <span className="text-muted"> Followers</span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};
export default ProfileComponent;