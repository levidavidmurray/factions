<template>
	<div class="player-side">
		<div class="left">
			<div class="character"></div>
		</div>
		<div class="right">
			<CombatStats :player="player" class="right-stats"/>
		</div>
		<AbilityControls :player="player"/>
	</div>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import CombatStats from "./CombatStats.vue";
	import {Player} from "@/lib/models/player";
	import AbilityControls from "@/components/combat/AbilityControls.vue";

	@Component({
		components: {CombatStats, AbilityControls},
	})
	export default class PlayerSide extends Vue
	{
		@Prop(Player) public player!: Player;
	}
</script>

<style scoped lang="scss">
	.player-side {
		height: 400px;
		width: 100%;
		display: flex;

		.left,.right {
			width: 50%;
			height: 100%;
		}

		.left {
			.character {
				width: 200px;
				height: 250px;
				background-color: dodgerblue;
				margin: 0 0 0 auto;
			}
		}
	}
</style>
