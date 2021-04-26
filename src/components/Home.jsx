import React from "react";
import DetailView from "./DetailView";
import { useSelector } from "react-redux";

const Home = () => {
    const home = useSelector((state) => state.getData.data);
    return (
        <>{home && home.features && <DetailView features={home.features} />}</>
    );
};
export default Home;
