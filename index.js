const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("cloud-lab"));

app.use("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/cloud-lab/index.html"));
});

app.listen(port, () => {
	console.log("Server running on port: " + port);
});
