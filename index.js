const express = require("express")
const multer = require("multer")
const colorThief = require("pure-color-thief-node")
const nearestColor = require("nearest-color")
const colorNameList = require("color-name-list")

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images")
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + "--" + file.originalname)
  },
})
const upload = multer({ storage })

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", upload.single("imageFile"), (req, res) => {
  const img = new colorThief.default()
  img
    .loadImage(req.file.path)
    .then(() => {
      const cname = img.getColor()

      const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16)
            return hex.length === 1 ? "0" + hex : hex
          })
          .join("")
      const hexed = rgbToHex(cname[0], cname[1], cname[2])

      const colors = colorNameList.reduce(
        (o, { name, hex }) => Object.assign(o, { [name]: hex }),
        {}
      )
      const nearest = nearestColor.from(colors)

      console.log(hexed)
      console.log(nearest(hexed))
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(8000, () => console.log("Listening at https://localhost:8000"))
