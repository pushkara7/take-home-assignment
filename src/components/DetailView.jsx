import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSortData } from "../customHooks/useSortData";
import SortButton from "./SortButton";
import "../styles/DetailView.css";
import "../styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedLinksId } from "../ducks/actionCreators";

const DetailView = () => {
    const jsonData = useSelector((state) => state.getData);
    const {
        data: {
            metadata: { title },
            features,
        },
        visitedLinksId,
        error,
    } = jsonData;

    const dispatch = useDispatch();
    const { sortedList, findSortDirection } = useSortData(features);

    const onLinkClick = (id) => {
        dispatch(setVisitedLinksId(id));
    };

    const getClassName = (featureId) => {
        const result = visitedLinksId.find((id) => id === featureId);
        if (result) {
            return "visited-link";
        }
        return "feature-link";
    };

    return (
        <>
            {" "}
            <h3 className="home-title">{title}</h3>
            <table className="view-table">
                <thead>
                <tr>
                    <th>
                        <SortButton
                            label="Title"
                            onSort={() => findSortDirection("title")}
                        />
                    </th>
                    <th>
                        <SortButton
                            label="Magnitude"
                            onSort={() => findSortDirection("mag")}
                        />
                    </th>
                    <th>
                        <SortButton
                            label="Time"
                            onSort={() => findSortDirection("time")}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedList.map((feature) => (
                    <tr key={feature.id}>
                        <td className="view-title">
                            {" "}
                            <Link
                                to={{
                                    pathname: "/detail",
                                    state: { feature: feature.properties },
                                }}
                                className={getClassName(feature.id)}
                                onClick={() => onLinkClick(feature.id)}
                            >
                                {feature.properties.title}{" "}
                            </Link>
                        </td>
                        <td className="view-mag">{feature.properties.mag}</td>
                        <td className="view-time">
                            {moment(feature.properties.time).format("lll")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default DetailView;
