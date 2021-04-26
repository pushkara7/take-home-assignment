import React from "react";
import { useSelector } from "react-redux";
import RowComponent from "./RowComponent";
import "../styles/Profile.css";

const Profile = () => {
    const profile = useSelector((state) => state.getData.profile);
    const { firstName, lastName, bio, avatarImage, email, phone } = profile;
    return (
        <>
            <div className="row">
                <h3 className="profile-title">Profile</h3>
            </div>
            <div className="row">
                <div className="column">
                    <img src={avatarImage} width="200" height="200"></img>
                </div>
                <div className="column">
                    <RowComponent rowLabel="First name" rowDescription={firstName} />
                    <RowComponent rowLabel="Last  name" rowDescription={lastName} />
                    <RowComponent rowLabel="Phone" rowDescription={phone} />
                    <RowComponent rowLabel="Email" rowDescription={email} />
                    <RowComponent rowLabel="Bio" rowDescription={bio} />
                </div>
            </div>
        </>
    );
};

export default Profile;

Profile.propTypes = {};

Profile.defaultProps = {};
