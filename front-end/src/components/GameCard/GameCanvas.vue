<template>
	<div id="GameCanvas-wrapper">
		<canvas id="gameCanvas" width="300" height="500"></canvas>
        <div class="game-controls">
            <div class="score text">Score: 0</div>
            <button class="startButton waves-effect waves-light btn black">Start</button>
        </div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "GameCanvas",
	inject: ["newScoreObject"],
	mounted() {
		require("../../js/game.js");
		window.addEventListener(
			"game:over",
			async function(e) {
				let newScore = {
					score: e.detail.score,
				};
				this.$emit("newScore", newScore);
				await axios.post("/newScore", this.newScoreObject);
				this.$emit("postedNewScoreToServer");
			}.bind(this)
		);
	},
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_text.scss';

#GameCanvas-wrapper {
	display: flex;
    flex-direction: column;
	justify-content: center;
}

#gameCanvas {
	border: 1px solid black;
}

.game-controls{
    display: flex;
    .score{
        flex: 1 1 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .startButton{
        flex: 1 1 50%;
    }
}
</style>
