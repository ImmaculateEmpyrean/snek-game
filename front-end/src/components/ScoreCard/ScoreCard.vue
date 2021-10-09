<template>
	<div id="ScoreCard-wrapper" class="card">
		<h2 class="heading2 center">Score Card</h2>
		<div class="inner-wrapper">
			<HighScore ref="highScore" />
			<HighScoreThisSession @newLocalHighScore="$emit('newLocalHighScore')" />
		</div>
	</div>
</template>

<script>
import HighScore from "./HighScore.vue";
import HighScoreThisSession from "./HighScoreThisSession.vue";

export default {
	name: "ScoreCard",
	components: {
		HighScore,
		HighScoreThisSession,
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_text.scss";
@import "../../assets/scss/_settings.scss";

.inner-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: $spacing-normal;

	@include atleast-desktop {
		flex-direction: row;
		column-gap: $spacing-normal;
		justify-content: space-between;
	}
}
</style>
