import {ICustomHeaders} from "zeebe-node";

// specific headers you may find in the fillForm tasks
export class PhDCustomHeaderShape implements ICustomHeaders {
  groups?: string[]  // manage permission groupwise
  title?: string  // title shown for this task
  formIO?: string  // the formIO JSON
  // define where to find the sciper. Can have multiple values, separated by comma
  assigneeSciperFieldName? : string
  /*
    Notification headers, use as a value when we notify, as default when a reminder is built
  */
  notifyTo?: string
  notifyCc?: string
  notifyBcc?: string
  notifySubject?: string
  notifyMessage?: string
  [key: string]: any  // the others var
}
