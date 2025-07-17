import {ICustomHeaders} from "zeebe-node";


// specific headers you may find in the fillForm tasks
export class PhDCustomHeaderShape implements ICustomHeaders {
  groups?: string[]  // manage permission groupwise
  title?: string  // title shown for this task
  formIO?: string  // formIO definition in JSON format
  // define where to find the sciper. It can have multiple values, separated by comma
  assigneeSciperFieldName? : string

  //
  // Notification headers, use as a value when we notify, as default when a reminder is built
  notifyTo?: string
  notifyCc?: string
  notifyBcc?: string
  notifySubject?: string
  notifyMessage?: string

  //
  // Ability to have some custom reminder content
  reminderTo?: string
  reminderCc?: string
  reminderBcc?: string
  reminderSubject?: string
  reminderMessage?: string

  // Others
  [key: string]: any  // the others var
}
