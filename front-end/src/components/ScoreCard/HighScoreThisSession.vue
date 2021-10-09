<template>
	<div id="HighScoreThisSession-wrapper">
		<h2 class="heading3 main-heading">Session HighScore</h2>
		<table class="highlight centered">
			<tbody>
				<!-- start only row -->
				<tr>
					<td class="text">{{ sessionHighScore.playerName }}</td>
					<td class="text">{{ sessionHighScore.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${sessionHighScore.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended only row -->
			</tbody>
		</table>
	</div>
</template>

<script>
// import _ from "lodash";

export default {
	name: "HighScoreThisSession",
	inject: ["newScoreObject"],
	data() {
		return {
			sessionHighScore: {
				playerName: "Null",
				score: 0,
				playerCountryCode: "Null",
			},
		};
	},
	watch: {
		newScoreObject: {
			handler(newVal) {
				if ("score" in this.sessionHighScore) {
					if (this.sessionHighScore.score <= newVal.newScoreObject.score) {
						this.sessionHighScore = newVal.newScoreObject;
						this.$emit("newLocalHighScore");
					} else {
						console.log("did not update score");
					}
				}
			},
			deep: true,
		},
	},
	mounted() {
		//console.log(this.newScoreObject);
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_settings.scss";
@import "@/assets/scss/_text.scss";

#HighScoreThisSession-wrapper {
	width: 100%;

	@include atleast-desktop {
		flex: 1 1 50%;
	}
}

.main-heading {
	text-align: center;
}
</style>
