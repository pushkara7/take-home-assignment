import React from "react";
import PropTypes from "prop-types";
import "../styles/DetailView.css";

const SortButton = ({ onSort, label }) => {
    return (
        <button type="button" onClick={onSort} className="button">
            {" "}
            {label}{" "}
        </button>
    );
};

export default SortButton;

SortButton.proptypes = {
    onSort: PropTypes.func,
    label: PropTypes.string,
};

SortButton.defaultProps = {
    onSort: null,
    label: "",
};
