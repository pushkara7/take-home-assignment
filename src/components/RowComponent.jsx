import React from "react";
import PropTypes from "prop-types";
import "../styles/Profile.css";

const RowComponent = ({ rowLabel, rowDescription }) => (
    <div className="inner-row">
        <div className="column-label">{rowLabel}</div>
        <div className="column-content">{rowDescription}</div>
    </div>
);

export default RowComponent;

RowComponent.proptypes = {
    rowLabel: PropTypes.string,
    rowDescription: PropTypes.string,
};

RowComponent.defaultProps = {
    rowLabel: "",
    rowDescription: "",
};
