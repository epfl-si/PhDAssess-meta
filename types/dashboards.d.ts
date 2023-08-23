interface StepBase {
  id: string;  // identify the step
  label: string;  // column header label
  alias?: string[]; // identify the other step that have got be finished to get a green color
  parents?: string[];  // to manage the advancing flow, meaning we know the parents should be green
}

interface StepWithStaticContent extends StepBase {
  content?: string; // if we want a default content instead a colored one
  dependsOn?: never;  // can't have the two, content or dependsOn
}

interface StepThatDependsOnField extends StepBase {
  content?: never;   // can't have the two, content or dependsOn
  dependsOn?: {
    field: string;  // if we need a value in the field
    contentOnFail?: string;  // the content printed if the field does not exists. If not set, go for the red color
  }
}

export type Step = StepWithStaticContent | StepThatDependsOnField
export type StepsDefinition = Step[]
