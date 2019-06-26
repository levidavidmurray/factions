import Vue from "vue";

export const EventBus = new Vue({});

export enum GameEvent
{
	UseAbility = "UseAbility",
}
