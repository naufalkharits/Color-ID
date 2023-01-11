import { ACTION_TYPES } from "../reducers/imageReducer"

function UploadButton(props) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        props.dispatch({
          type: ACTION_TYPES.SET_IMAGE,
          payload: window.URL.createObjectURL(e.target.files[0]),
        })
      }
      style={{
        padding: "0.5rem",
        color: "white",
        backgroundColor: "black",
        borderRadius: "0.5rem",
      }}
    />
  )
}

export default UploadButton
