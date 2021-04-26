import { SET_DATA, SET_VISITED_LINKS, SET_ERROR } from "./actions";

const initialState = {
    site: {},
    profile: {},
    data: {},
    visitedLinksId: [],
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                site: action.payload.site,
                profile: action.payload.profile,
                data: action.payload.data,
            };
        case SET_ERROR: {
            return {
                error: action.payload,
            };
        }
        case SET_VISITED_LINKS: {
            return {
                ...state,
                visitedLinksId: [...state.visitedLinksId, action.payload],
            };
        }
        default:
            return state;
    }
};

export default reducer;
