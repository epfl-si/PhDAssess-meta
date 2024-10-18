/**
 * Define what can be found inside the array of activities
 */
import {TDateISO} from "./dates";

export interface ActivityLog {
  elementId: string | undefined;  // which step this log concerns
  completed_at: TDateISO | undefined;  // when the step has been completed
}
