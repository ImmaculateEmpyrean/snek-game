<template>
	<div id="GameRules-wrapper">
		<ul class="collection with-header">
			<li class="collection-header">
				<h1 class="heading2">How To Play The Game Efficiently</h1>
			</li>
			<li class="collection-item">
				<p class="text">
					Points are to be scored in this game by getting the <strong>Snek</strong> to eat the cherries displayed in <strong style="color:red">Red</strong>.
                    The <strong>Snek</strong> is displayed in the color <strong style="color:blue">Blue</strong> and is relatively small at the start of the game.<br/>
					<strong>The (W,A,S,D) Keys Are Used To Control The Snek As It Moves Around.</strong>
				</p>
			</li>
			<li class="collection-item">
				<p class="text">
					Your <strong>Snek</strong>'s speed always remains constant.
				</p>
			</li>
			<li class="collection-item">
				<p class="text">
					The <strong>Snek</strong>'s movement is constrined to a two diamensional grid and as a result avoiding collisions is a lot more managable as the number of orientations the snake can be in is significantly less than the intial perception.
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "GameRules",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_text.scss";
#GameRules-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
