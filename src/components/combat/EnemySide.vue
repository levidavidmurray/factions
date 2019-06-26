<template>
	<div class="enemy-side">
		<div class="left">
			<CombatStats :player="enemy" class="left-stats" />
		</div>
		<div class="right">
			<div class="character"></div>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import CombatStats from "./CombatStats.vue";
	import {Player} from "@/lib/models/player";
	@Component({
		components: {CombatStats},
	})
	export default class EnemySide extends Vue
	{
		@Prop(Player) public enemy!: Player;
	}
</script>

<style scoped lang="scss">
	.enemy-side {
		height: 400px;
		width: 100%;
		display: flex;

		& > * {
			width: 50%;
			height: 100%;

			.character {
				width: 200px;
				height: 250px;
				background-color: orangered;
			}
		}
	}
</style>
