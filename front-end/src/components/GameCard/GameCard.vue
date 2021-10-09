<template>
	<div id="GameCard-wrapper" class="card">
		<GameCanvas
			@newScore="recievedNewScore"
			@postedNewScoreToServer="$emit('postedNewScoreToServer')"
		/>
		<GameRules />
	</div>
</template>

<script>
import GameCanvas from "./GameCanvas.vue";
import GameRules from "./GameRules.vue";

export default {
	name: "GameCard",
	components: {
		GameCanvas,
		GameRules,
	},
	methods: {
		recievedNewScore(newScoreObject) {
			this.$emit("newScore", newScoreObject);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_settings.scss";

#GameCard-wrapper {
	padding: $spacing-normal;

	display: flex;
	flex-direction: column;
	row-gap: $spacing-normal;

	@include atleast-desktop {
		display: flex;
		flex-direction: row;
		column-gap: $spacing-normal;
		align-items: center;
	}
}
</style>
