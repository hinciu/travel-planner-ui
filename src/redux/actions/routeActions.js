import { CLEAR_ROUTES, CLEAR_ROUTES_ERROR, CREATE_ROUTE_REQUESTED, GET_ROUTE_REQUESTED } from "./actionTypes";

export const createRoute = (data) => ({
    type: CREATE_ROUTE_REQUESTED,
    payload: {
        data
    },
});

export const getRoute = (name) => ({
    type: GET_ROUTE_REQUESTED,
    payload: {
        name
    },
});

export const clearRoutes = () =>({
    type: CLEAR_ROUTES
})

export const clearRoutesError = () =>({
    type: CLEAR_ROUTES_ERROR
})