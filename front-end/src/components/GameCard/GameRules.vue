<template>
	<div id="GameRules-wrapper">
		<ul class="collection with-header">
			<li class="collection-header">
				<h1 class="heading2">How To Play The Game Efficiently</h1>
			</li>
			<li class="collection-item">
				<p class="text">
					Your bird gains downward speed as it falls, but will always flap up by
					the same height–just enough to stay between the two pipes. (pressing
					the
					<strong>SPACE</strong> key or touching the
					<strong>Screen</strong> makes the bird flap its wings.)
				</p>
			</li>
			<li class="collection-item">
				<p class="text">
					Your bird’s horizontal speed remains constant.
				</p>
			</li>
			<li class="collection-item">
				<p class="text">
					The pipes through which your bird flies appear at varying heights, but
					always have the same vertical clearance and horizontal distance
					between them.
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
