import {Element} from "@/lib/types";

export enum AbilityType
{
	Attack = "Attack",
	Defense = "Defense",
	Support = "Support",
	Utility = "Utility",
}

export enum AbilityAffector
{
	Health = "Health",
	Shield = "Shield",
	ElPower = "ElPower",
	Abilities = "Abilities",
}

export enum CombatTarget
{
	Self = "self",
	Enemy = "enemy",
}

export interface AbilityEvent
{
	playerId: string;
	ability: Ability;
}

export interface Ability
{
	name: string;
	type: AbilityType;
	element: Element;
	epCost: number;
	value: number;
	affector: AbilityAffector,
	affectee: CombatTarget,
}
