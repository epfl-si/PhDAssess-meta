import {Job} from "zeebe-node";
import {PhDCustomHeaderShape} from "./fillForm/headers";
import {PhDAssessVariables} from "./variables";


// Rebuild the Zeebe Job definition for PhD Assess
export interface PhDAssessJob <
  WorkerInputVariables = Partial<PhDAssessVariables>,
  CustomHeaderShape = PhDCustomHeaderShape
> extends Job <
  Partial<WorkerInputVariables>, CustomHeaderShape
> {}
