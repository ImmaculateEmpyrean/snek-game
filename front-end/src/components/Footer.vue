<template>
	<div id="Footer-wrapper">
		<footer class="page-footer black">
			<div class="footer-copyright">
				<p class="text footer-text white-text">
					<i class="material-icons">copyright</i> 2021 Developed By Veeru
					Empyrean
				</p>
				<a
					class="text footer-text white-text right"
					id="visitWebsiteLink"
					href="https://veeru-empyrean.herokuapp.com/"
					>Visit My Website</a
				>
			</div>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_text.scss";
@import "@/assets/scss/_settings.scss";

.page-footer {
	padding-top: 0;
}

.footer-text {
	padding: 0 24px;
	margin: 0;

	display: flex;
	align-items: center;
	column-gap: 6px;
}

#visitWebsiteLink {
	text-decoration: underline;
}
</style>
