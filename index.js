const express = require("express")
const { getAverageColor } = require("fast-average-color-node")
const nearestColor = require("nearest-color")
const colorNameList = require("color-name-list")

const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const context = req.dataProcessed
  res.render("index", { color: context || "" })
})

app.post(
  "/api/upload",
  (req, res, next) => {
    getAverageColor(req.body.base64Image, {
      mode: "precision",
      algorithm: "dominant",
    }).then((color) => {
      const names = colorNameList.reduce(
        (o, { name, hex }) => Object.assign(o, { [name]: hex }),
        {}
      )
      const nearest = nearestColor.from(names)
      req.dataProcessed = nearest(color.hex)
      return next()
    })
  },
  (req, res) => {
    const context = req.dataProcessed
    res.render("index", { color: context || "" })
  }
)

app.listen(process.env.PORT || 8000)
