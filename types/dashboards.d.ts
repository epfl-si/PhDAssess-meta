interface StepBase {
  id: string;  // identify the step
  label: string;  // column header label
  alias?: string[]; // identify the other step that have got be finished to get a green color
  parents?: string[];  // to manage the advancing flow, meaning we know the parents should be green
  knownAs?: string;  // if this step represents two different steps
}

interface StepWithStaticContent extends StepBase {
  switchOnField?: never;
  activatedOnField?: never;
  customContent?: string; // if we want a default content instead a colored one. A empty string is valid
}

interface StepWithSwitchField extends StepBase {
  customContent?: never;
  activatedOnField?: never;
  switchOnField?: string;  // this step get his green-orange status from a specific field
}

interface StepWithActivatedOnField extends StepBase {
  customContent?: never;
  switchOnField?: never;
  activatedOnField?: string; // define which field make this step activated, or in an unnecessary state
}

export type Step = StepWithStaticContent | StepWithSwitchField | StepWithActivatedOnField
export type StepsDefinition = Step[]
