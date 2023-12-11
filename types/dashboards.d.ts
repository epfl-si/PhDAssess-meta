interface StepBase {
  id: string;  // identify the step
  label: string;  // column header label
  alias?: string[]; // identify the other step that have got be finished to get a green color
  parents?: string[];  // to manage the advancing flow, meaning we know the parents should be green
  knownAs?: string[];  // if this step has aliases that can trigger the color, of the tasks itself or when checking for parents
}

interface StepWithStaticContent extends StepBase {
  activatedOnField?: never;
  customContent?: string; // if we want a default content instead a colored one. An empty string is valid
}

interface StepWithActivatedOnField extends StepBase {
  customContent?: never;
  activatedOnField?: string; // define which field make this step activated, or in an unnecessary state
}

export type Step = StepWithStaticContent | StepWithActivatedOnField
export type StepsDefinition = Step[]
