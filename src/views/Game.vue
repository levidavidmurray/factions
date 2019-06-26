<template>
	<div class="game-view">
		<EnemySide :enemy="enemy"/>
		<PlayerSide :player="player"/>
	</div>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";
	import {Player} from "@/lib/models/player";
	import EnemySide from "@/components/combat/EnemySide.vue";
	import PlayerSide from "@/components/combat/PlayerSide.vue";
	import {Ability, AbilityAffector, AbilityEvent, AbilityType, CombatTarget} from "@/lib/models/combat/types";
	import {EventBus, GameEvent} from "@/lib/EventBus";

	@Component({
		components: {PlayerSide, EnemySide},
	})
	export default class Game extends Vue
	{
		public player: Player = new Player("Levi");
		public enemy: Player = new Player("Azula");

		public created()
		{
			EventBus.$on(GameEvent.UseAbility, (event: AbilityEvent) => this.onAbilityUsed(event));
		}

		private onAbilityUsed(event: AbilityEvent)
		{
			console.log("ABILITY", event);
			const ability: Ability = event.ability;
			const abilityUser: Player = this.playerMap[event.playerId];
			const target: Player = this.getAbilityTarget(ability);

			abilityUser.elPower -= ability.epCost;

			switch (ability.type)
			{
				case AbilityType.Attack:
					this.handleAttackAbility(ability, target.id);
					break;
				case AbilityType.Defense:
					this.handleDefenseAbility(ability, target.id);
					break;
				default:
					console.error("Invalid ability!");
					break;
			}
		}

		private handleAttackAbility(ability: Ability, targetId: string)
		{
			const target: Player = this.playerMap[targetId];

			if (ability.affector === AbilityAffector.Health)
			{
				target.health -= ability.value;
			}
		}

		private handleDefenseAbility(ability: Ability, targetId: string)
		{
			const target: Player = this.playerMap[targetId];

			if (ability.affector === AbilityAffector.Health)
			{
				target.health += ability.value;
			}
		}

		private getAbilityTarget(ability: Ability): Player
		{
			if (ability.affectee === CombatTarget.Self)
			{
				return this.player;
			}

			return this.enemy;
		}

		get playerMap()
		{
			return {
				[this.player.id]: this.player,
				[this.enemy.id]: this.enemy,
			};
		}
	}
</script>

<style scoped lang="scss">
	.game-view {
		height: 100vh;
		overflow: hidden;
		position: relative;
	}
</style>
