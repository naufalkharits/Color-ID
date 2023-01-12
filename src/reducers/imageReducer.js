export const INITIAL_STATE = {
  loading: false,
  error: false,
  image: "https://images.unsplash.com/photo-1670384098289-1f484d6c3cca",
  colors: [],
  code: "hex",
}

export const ACTION_TYPES = {
  SET_IMAGE: "SET_IMAGE",
  SET_COLORS: "SET_COLORS",
}

export function imageReducer(state, action) {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload,
      }
    case "SET_COLORS":
      console.log(action.payload)
      return {
        ...state,
        colors: [...action.payload],
      }
    default:
      return state
  }
}
