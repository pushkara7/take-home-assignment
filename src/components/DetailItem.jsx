import React from "react";
import moment from "moment";
import { useLocation } from "react-router-dom";
import RowComponent from "./RowComponent";
import "../styles/Profile.css";

const DetailItem = () => {
    const location = useLocation();
    const {
        state: {
            feature: { title, mag, time, status, tsunami, type },
        },
    } = location;
    return (
        <div className="row-detail">
            <div className="column-detail">
                <h3 className="detail-title">{title}</h3>
                <RowComponent rowLabel="Title" rowDescription={title} />
                <RowComponent rowLabel="Magnitude" rowDescription={mag} />
                <RowComponent
                    rowLabel="Time"
                    rowDescription={moment(time).format("lll")}
                />
                <RowComponent rowLabel="Status" rowDescription={status} />
                <RowComponent rowLabel="Tsunami" rowDescription={tsunami} />
                <RowComponent rowLabel="Type" rowDescription={type} />
            </div>
        </div>
    );
};

export default DetailItem;
