import { GET_BLOGS, SELECTED_BLOG } from "../ActionTypes/ActionTypes";

const initialValues = {
  blogs: [],
};

export const BlogReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_BLOGS: {
      return {
        ...state,
        blogs: action.payload,
      };
    }

    default:
      return state;
  }
};
export const SingleBlogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_BLOG: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
