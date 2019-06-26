import {Ability, CombatTarget, AbilityAffector, AbilityType} from "@/lib/models/combat/types";
import {Element} from "@/lib/types";

export const basicAttack: Ability = {
	name: "Attack",
	type: AbilityType.Attack,
	element: Element.Neutral,
	epCost: 5,
	value: 10,
	affector: AbilityAffector.Health,
	affectee: CombatTarget.Enemy,
};

export const basicHeal: Ability = {
	name: "Heal",
	type: AbilityType.Defense,
	element: Element.Neutral,
	epCost: 10,
	value: 5,
	affector: AbilityAffector.Health,
	affectee: CombatTarget.Self,
};
