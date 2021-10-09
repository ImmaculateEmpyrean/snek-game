const path = require("path");
const express = require("express");

const fs = require("fs");

const app = express();

//use express to handle post requests..
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup the static directory to be served
app.use(express.static("./www"));

let port = process.env.PORT || 4001;
app.listen(port, function () {
	console.log(`server running on port ${port}`);
});

app.get("/", function (req, res) {
	res.sendFile(path.resolve(__dirname, "www/index.html"));
});

app.post("/newScore", function (req, res) {
	console.log(req.body);
	let highScores = require("./highScores.json");

	if (req.body.newScoreObject.playerName === "noName")
		res.status(404).send("did not patch internal db as no name was provided");
	if (req.body.newScoreObject.playerCountryCode === "noCountry")
		res
			.status(404)
			.send("did not patch internal db as no country was provided");

	let patchFlag = false;
	highScores.every(function (casket, index) {
		if (casket.score < req.body.newScoreObject.score) {
			highScores.splice(index, 0, req.body.newScoreObject);
			patchFlag = true;
			return false;
		}
		return true;
	});

	if (patchFlag === true) {
		fs.writeFileSync("./highScores.json", JSON.stringify(highScores), "utf-8");
		console.log("patched file");
	}

	res.status(200).send("success!");
});
app.get("/highScores", function (req, res) {
	res.json(require("./highScores.json"));
});
