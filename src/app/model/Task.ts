import { Directive } from "@angular/core";

export enum TaskState {
  EN_COURS = "En cours",
  A_FAIRE = "A faire",
  TERMINEE = "Terminée"
}

export class Task {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public state: TaskState,
    public date: string,
  ) { }
}
