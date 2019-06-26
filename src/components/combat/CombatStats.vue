<template>
	<div class="combat-stats">
		<div class="top" v-if="player">
			<span class="name">{{ player.name }}</span>
			<span class="level">
				Level:
				<span class="level-no">{{ player.level }}</span>
			</span>
		</div>
		<div class="bottom">
			<span class="health">
				HP:
				<span class="health-no">{{ player.health }}</span>
			</span>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import {Player} from "@/lib/models/player";

	@Component
	export default class CombatStats extends Vue
	{
		@Prop(Player) public player!: Player;
	}
</script>

<style scoped lang="scss">
	.combat-stats {
		display: flex;
		height: 150px;
		flex-direction: column;
		max-width: 480px;
		width: 30%;
		padding: 24px;
		margin: 0 48px 0 auto;

		&.right-stats {
			margin: 0 auto 0 48px;
		}

		.top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 16px;
		}

		.bottom {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
