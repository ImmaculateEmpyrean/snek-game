<template>
	<div class="app-container">
		<div class="container">
			<h1 class="heading1">Snek Online</h1>
			<div id="app-wrapper">
				<InputFieldCard
					@playerName:changed="playerNameChanged"
					@playerCountryCode:changed="playerCountryCodeChanged"
				/>
				<GameCard
					@newScore="newScoreRecieved"
					@newLocalHighScore="handleNewLocalHighScore"
					@postedNewScoreToServer="handlePostedNewScoreToServer"
				/>
				<ScoreCard ref="scoreCard" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import GameCard from "./components/GameCard/GameCard.vue";
import ScoreCard from "./components/ScoreCard/ScoreCard.vue";

import InputFieldCard from "./components/InputFieldCard.vue";

import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		GameCard,
		ScoreCard,
		Footer,
		InputFieldCard,
	},
	data() {
		return {
			playerName: "noName",
			playerCountryCode: "noCountry",
			newScoreObject: {
				newScoreObject: null,
			},
			refreshHighScoreTable: false,
		};
	},
	methods: {
		playerNameChanged(newName) {
			this.playerName = newName;
		},
		playerCountryCodeChanged(newCode) {
			this.playerCountryCode = newCode;
		},
		newScoreRecieved(newScoreObject) {
			this.newScoreObject.newScoreObject = newScoreObject;
			this.newScoreObject.newScoreObject.playerName = this.playerName;
			this.newScoreObject.newScoreObject.playerCountryCode = this.playerCountryCode;
		},
		handleNewLocalHighScore() {
			this.refreshHighScoreTable = true;
			console.log("set to true");
		},
		handlePostedNewScoreToServer() {
			this.refreshHighScoreTable = false;
			this.$refs.scoreCard.$refs.highScore.refreshHighScoresFromServer();
		},
	},
	provide() {
		return {
			playerName: this.playerName,
			playerCountryCode: this.playerCountryCode,
			newScoreObject: this.newScoreObject,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_text.scss";
</style>

<style lang="scss">
body {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
}

main {
	flex: 1 0 auto;
}
</style>
