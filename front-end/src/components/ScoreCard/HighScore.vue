<template>
	<div id="HighScore-wrapper">
		<table class="highlight striped centered">
			<thead>
				<tr>
					<th class="heading3">SNo.</th>
					<th class="heading3">Name</th>
					<th class="heading3">Score</th>
					<th class="heading3">Country</th>
				</tr>
			</thead>

			<tbody>
				<!-- start first row -->
				<tr>
					<td class="text">1.</td>
					<td class="text">{{ highScoreOne.playerName }}</td>
					<td class="text">{{ highScoreOne.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreOne.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended first row -->

				<!-- start second row -->
				<tr>
					<td class="text">2.</td>
					<td class="text">{{ highScoreTwo.playerName }}</td>
					<td class="text">{{ highScoreTwo.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreTwo.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended second row -->

				<!-- start third row -->
				<tr>
					<td class="text">3.</td>
					<td class="text">{{ highScoreThree.playerName }}</td>
					<td class="text">{{ highScoreThree.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreThree.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended third row -->

				<!-- start fourth row -->
				<tr>
					<td class="text">4.</td>
					<td class="text">{{ highScoreFour.playerName }}</td>
					<td class="text">{{ highScoreFour.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreFour.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended fourth row -->

				<!-- start fifth row -->
				<tr>
					<td class="text">5.</td>
					<td class="text">{{ highScoreFive.playerName }}</td>
					<td class="text">{{ highScoreFive.score }}</td>
					<td>
						<img
							:src="
								`https://www.countryflags.io/${highScoreFive.playerCountryCode}/flat/64.png`
							"
						/>
					</td>
				</tr>
				<!-- ended fifth row -->
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "HighScore",
	data() {
		return {
			highScoreOne: function() {
				return {
					playerName: "noName",
					playerCountry: "noCountry",
					score: 0,
				};
			},
			highScoreTwo: function() {
				return {
					playerName: "noName",
					playerCountry: "noCountry",
					score: 0,
				};
			},
			highScoreThree: function() {
				return {
					playerName: "noName",
					playerCountry: "noCountry",
					score: 0,
				};
			},
			highScoreFour: function() {
				return {
					playerName: "noName",
					playerCountry: "noCountry",
					score: 0,
				};
			},
			highScoreFive: function() {
				return {
					playerName: "noName",
					playerCountry: "noCountry",
					score: 0,
				};
			},
		};
	},
	methods: {
		async refreshHighScoresFromServer() {
			let axios = require("axios");
			let result = await axios.get("/highScores");

			this.highScoreOne = result.data[0];
			this.highScoreTwo = result.data[1];
			this.highScoreThree = result.data[2];
			this.highScoreFour = result.data[3];
			this.highScoreFive = result.data[4];
		},
	},
	async created() {
		await this.refreshHighScoresFromServer();
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_settings.scss";
@import "@/assets/scss/_text.scss";

#HighScore-wrapper {
	width: 100%;

	@include atleast-desktop {
		flex: 0 0 50%;
	}
}
</style>
