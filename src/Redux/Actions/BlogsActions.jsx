import {
  GET_BLOGS,
  GET_BLOGS_FAIL,
  SELECTED_BLOG,
  SELECTED_BLOG_FAIL,
} from "../ActionTypes/ActionTypes";
import axios from "axios";

export const GetBlogs = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
    );
    console.log("Action", response.data);
    dispatch({ type: GET_BLOGS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_BLOGS_FAIL,
    });
  }
};
export const SelectedBlog = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
    );

    dispatch({ type: SELECTED_BLOG, payload: response.data });
  } catch (error) {
    alert(error);
    dispatch({ type: SELECTED_BLOG_FAIL });
  }
};
