import {Ability} from "@/lib/models/combat/types";
import {basicAttack, basicHeal} from "@/lib/models/combat/abilities";
import {EventBus, GameEvent} from "@/lib/EventBus";
import uuidv4 from "uuidv4";

export class Player {
	private _id!: string;
	private _name: string = "PLAYER";
	private _level: number = 0;
	private _health: number = 0;
	private _elPower: number = 0;

	private _abilities: Ability[] = [];

	constructor(name: string)
	{
		this.id = uuidv4();
		this.name = name;
		this.level = 5;
		this.health = 100;
		this.elPower = 100;

		this.abilities = [basicAttack, basicHeal];
	}

	public useAbility(ability: Ability)
	{
		EventBus.$emit(GameEvent.UseAbility, {
			playerId: this.id,
			ability,
		});
	}

	private addAbility(ability: Ability): void
	{
		this.abilities.push(ability);
	}

	private removeAbility(ability: Ability): void
	{
		const abilityIndex = this.abilities.indexOf(ability);
		this.abilities.splice(abilityIndex, 1);
	}

	get abilityEventName(): string
	{
		return `${this.id}-${GameEvent.UseAbility}`
	}

	get health(): number
	{
		return this._health;
	}

	set health(value: number)
	{
		this._health = value;
	}

	get elPower(): number
	{
		return this._elPower;
	}

	set elPower(value: number)
	{
		this._elPower = value;
	}

	get abilities(): Ability[]
	{
		return this._abilities;
	}

	set abilities(value: Ability[])
	{
		this._abilities = value;
	}

	get level(): number
	{
		return this._level;
	}

	set level(value: number)
	{
		this._level = value;
	}

	get name(): string
	{
		return this._name;
	}

	set name(value: string)
	{
		this._name = value;
	}

	get id(): string
	{
		return this._id;
	}

	set id(value: string)
	{
		this._id = value;
	}
}
