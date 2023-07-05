let express = require("express");

let app = express();

//callbacks
let createDate = (req, res) => {
    let dateM = req.params.date
    if(isNaN(Date.parse(dateM))) {
        dateM = parseInt(dateM)
    }


  let date = new Date(dateM)

  if(date.toUTCString() == "Invalid Date")
  return res.json({ error: "Invalid Date"})


  res.json({
    unix: Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getSeconds()
    ),
    utc: date.toUTCString(),
  });
};

//routes
app.get('/api/:date', createDate);

app.listen(8000);
