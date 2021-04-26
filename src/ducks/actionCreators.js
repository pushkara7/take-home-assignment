import { SET_DATA, SET_VISITED_LINKS, SET_ERROR } from "./actions";

export const setData = (data) => ({ type: SET_DATA, payload: data });

export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const setVisitedLinksId = (linkId) => ({
    type: SET_VISITED_LINKS,
    payload: linkId,
});

export const getData = () => (dispatch) => {
    fetch("data.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                dispatch(setError(true));
            }
        })
        .then(function (response) {
            dispatch(setData(response));
        })
        .catch((error) => {
            dispatch(setError(true));
        });
};
