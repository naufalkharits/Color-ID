import { useReducer } from "react"

import { imageReducer, INITIAL_STATE } from "./reducers/imageReducer"

import ColorPalettes from "./components/ColorPalettes"
import ImagePreview from "./components/ImagePreview"
import SearchInput from "./components/SearchInput"
import UploadButton from "./components/UploadButton"

import "./App.css"

function App() {
  const [imageReducerState, imageReducerDispatch] = useReducer(imageReducer, INITIAL_STATE)

  return (
    <div
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}>
      <ImagePreview image={imageReducerState.image} dispatch={imageReducerDispatch} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <UploadButton dispatch={imageReducerDispatch} />
        <div>or</div>
        <SearchInput dispatch={imageReducerDispatch} />
      </div>
      {imageReducerState.colors.length ? (
        <ColorPalettes colors={imageReducerState.colors} code={imageReducerState.code} />
      ) : null}
    </div>
  )
}

export default App
