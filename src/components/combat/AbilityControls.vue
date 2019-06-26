<template>
	<div class="ability-controls">
		<div class="ability">
			<div v-if="abilityOne" @click="() => useAbility(abilityOne)">
				<span>{{ abilityOne.name }}</span>
			</div>
		</div>
		<div class="ability">
			<div v-if="abilityTwo" @click="() => useAbility(abilityTwo)">
				<span>{{ abilityTwo.name }}</span>
			</div>
		</div>
		<div class="ability">
			<div v-if="abilityThree" @click="() => useAbility(abilityThree)">
				<span>{{ abilityThree.name }}</span>
			</div>
		</div>
		<div class="ability">
			<div v-if="abilityFour" @click="() => useAbility(abilityFour)">
				<span>{{ abilityFour.name }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import {Player} from "@/lib/models/player";
	import {Ability} from "@/lib/models/combat/types";
	import {EventBus, GameEvent} from "@/lib/EventBus";

	@Component
	export default class AbilityControls extends Vue
	{
		@Prop(Player) public player!: Player;

		public useAbility(ability: Ability)
		{
			this.player.useAbility(ability);
		}

		get abilityOne()
		{
			return this.player.abilities[0]
		}

		get abilityTwo()
		{
			return this.player.abilities[1]
		}

		get abilityThree()
		{
			return this.player.abilities[2]
		}

		get abilityFour()
		{
			return this.player.abilities[3]
		}
	}
</script>

<style scoped lang="scss">
	.ability-controls {
		width: fit-content;
		height: fit-content;
		display: grid;
		grid-template-columns: 256px 256px;
		grid-template-rows: 64px 64px;
		grid-row-gap: 16px;
		grid-column-gap: 16px;
		background-color: #2c3e50;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 24px;
		margin: auto;

		.ability {
			height: 100%;
			width: 100%;
			background-color: white;

			& > * {
				width: 100%;
				height: 100%;
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				user-select: none;
			}

			&:hover {
				background-color: lightblue;
			}
		}
	}
</style>
