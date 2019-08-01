import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_GUIDES_START,
  GET_GUIDES_SUCCESS,
  GET_GUIDES_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  FETCHING_ITEM_BY_ID_START,
  FETCHING_ITEM_BY_ID_SUCCESS,
  FETCHING_ITEM_BY_ID_FAILURE,
  DELETE_GUIDE_START,
  DELETE_GUIDE_SUCCESS,
  DELETE_GUIDE_FAILURE,
  ADD_GUIDE_START,
  ADD_GUIDE_SUCCESS,
  ADD_GUIDE_FAILURE,
  UPDATE_GUIDE_START,
  UPDATE_GUIDE_SUCCESS,
  UPDATE_GUIDE_FAILURE,
  ADD_STEP_START,
  ADD_STEP_SUCCESS,
  ADD_STEP_FAILURE,
  GET_STEP_START,
  GET_STEP_SUCCESS,
  GET_STEP_FAILURE
} from "../actions";

const initialState = {
  user: null,
  users: null,
  guide: null,
  guides: null,
  guideById: null,
  error: "",
  isLoading: false,
  isLoggingIn: false,
  isLoggedIn: false,
  fetchingData: false,
  deletingGuide: false,
  addingGuide: false,
  updatingGuide: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggingIn: true,
        fetchingData: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        guides: null,
        user: action.payload,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "Login failed, please try again",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case LOGOUT:
      return {
        ...state,
        guides: null,
        user: null,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false,
        isLoggedIn: false
      };
    case GET_GUIDES_START:
      return {
        ...state,
        guides: null,
        error: "",
        isLoading: true,
        fetchingData: true
      };
    case GET_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload,
        error: "",
        isLoading: false,
        fetchingData: false
      };
    case GET_GUIDES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        fetchingData: false
      };
    case SIGN_UP_START:
      return {
        ...state,
        user: null,
        users: null,
        guides: null,
        error: "",
        isLoading: true,
        isLoggingIn: false,
        fetchingData: false
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        guides: null,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: "Error signing up",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case GET_USERS_START:
      return {
        ...state,
        users: null,
        error: "",
        isLoading: true,
        isLoggingIn: false,
        fetchingData: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: "Error getting all users",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case FETCHING_ITEM_BY_ID_START:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case FETCHING_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        guideById: action.payload,
        error: "",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case FETCHING_ITEM_BY_ID_FAILURE:
      return {
        ...state,
        error: "Error fetching item by ID",
        isLoading: false,
        isLoggingIn: false,
        fetchingData: false
      };
    case DELETE_GUIDE_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        deletingGuide: true
      };
    case DELETE_GUIDE_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        deletingGuide: false
      };
    case DELETE_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        deletingGuide: false
      };
    case ADD_GUIDE_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        addingGuide: true
      };
    case ADD_GUIDE_SUCCESS:
      return {
        ...state,
        guides: [...state.guides, action.payload],
        error: "",
        isLoading: true,
        addingGuide: true
      };
    case ADD_GUIDE_FAILURE:
      return {
        ...state,
        error: "Error adding guide",
        isLoading: false,
        addingGuide: false
      };
    case UPDATE_GUIDE_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        updatingGuide: true
      };
    case UPDATE_GUIDE_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        updatingGuide: false
      };
    case UPDATE_GUIDE_FAILURE:
      return {
        ...state,
        error: "Error updating guide",
        isLoading: false,
        updatingGuide: false
      };
    case ADD_STEP_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case ADD_STEP_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false
      };
    case ADD_STEP_FAILURE:
      return {
        ...state,
        error: "Error adding a step",
        isLoading: false
      };
    case GET_STEP_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case GET_STEP_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false
      };
    case GET_STEP_FAILURE:
      return {
        ...state,
        error: "Error getting steps",
        isLoading: false
      };
    default:
      return state;
  }
};
