import { ACTION_TYPES } from "../reducers/imageReducer"

function SearchInput(props) {
  return (
    <input
      type="text"
      placeholder="url / blob / base64"
      onChange={(e) => props.dispatch({ type: ACTION_TYPES.SET_IMAGE, payload: e.target.value })}
      style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem" }}
    />
  )
}

export default SearchInput
