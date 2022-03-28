import { createContext, useContext, useReducer } from 'react';
import posts from '../components/Feed/postData.json';
type post = {
  title: string;
  text: string;
};

type InitialState = {
  posts: Array<post>;
};
type Actions = {
  addPost: (post: post) => void;
};

type ReducerActionTypes =
  | {
      type: 'ADD_POST';
      payload: {
        post: post;
      };
    }
  | {
      type: 'INIT_POSTS';
      payload: {
        posts: Array<post>;
      };
    };

const initialState: InitialState = {
  posts: posts,
};
const reducer = (
  state: InitialState = initialState,
  action: ReducerActionTypes
) => {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        posts: [action.payload.post, ...state.posts],
      };
    }
    case 'INIT_POSTS': {
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
      };
    }
    default: {
      return state;
    }
  }
};
export const usePost = () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  } as InitialState);
  const initMyPost = (posts: Array<post>) => {
    dispatch({
      type: 'INIT_POSTS',
      payload: {
        posts,
      },
    });
  };
  const addMyPost = (post: post) => {
    dispatch({
      type: 'ADD_POST',
      payload: {
        post,
      },
    });
  };
  return {
    state,
    actions: {
      initPost: (posts: Array<post>) => {
        initMyPost(posts);
      },
      addPost: (post: post) => {
        addMyPost(post);
      },
    },
  };
};

export const PostContext = createContext<{
  state: InitialState;
  actions: Actions;
}>({
  state: initialState,
  actions: {
    addPost: (post: post) => {},
  },
});
export const usePostContext = () => useContext(PostContext);
