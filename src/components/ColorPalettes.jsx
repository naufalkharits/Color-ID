import { PlayIcon } from "@heroicons/react/24/solid"

function ColorPalettes(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <span style={{ fontSize: "1.5rem" }}>Color Palettes</span>
      <div style={{ display: "flex", gap: "1rem" }}>
        {props.colors.map((color, index) => {
          const normalizeColorValue =
            Array.isArray(color) && props.code === "rgb"
              ? `rgb(${color[0]}, ${color[1]}, ${color[2]})`
              : color
          return (
            <div
              key={index++}
              style={{
                height: "6rem",
                width: "6rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}>
              <div
                style={{
                  height: "4rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: normalizeColorValue,
                  cursor: "pointer",
                }}>
                <PlayIcon
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    color: normalizeColorValue,
                    filter:
                      "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                  }}
                />
              </div>
              <div>colorName</div>
              <div style={{ color: normalizeColorValue }}>{normalizeColorValue}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorPalettes
