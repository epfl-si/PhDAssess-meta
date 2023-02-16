import {ICustomHeaders, Job} from "zeebe-node";

import {PhDAssessVariables} from "./variables";


// Rebuild the Zeebe Job definition for PhD Assess
export interface PhDAssessJob <
  WorkerInputVariables = Partial<PhDAssessVariables>,
  CustomHeaderShape = ICustomHeaders
> extends Job <
  Partial<WorkerInputVariables>, CustomHeaderShape
> {}
