import { ColorExtractor } from "react-color-extractor"

import { ACTION_TYPES } from "../reducers/imageReducer"

function ImagePreview(props) {
  return (
    <div style={{ width: "50%" }}>
      <ColorExtractor
        getColors={(colors) => props.dispatch({ type: ACTION_TYPES.SET_COLORS, payload: colors })}>
        <img
          src={props.image}
          style={{ width: "100%", display: "block", borderRadius: "0.5rem" }}
        />
      </ColorExtractor>
    </div>
  )
}

export default ImagePreview
