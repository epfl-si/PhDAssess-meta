/**
 * Define what can be found inside the array of activities
 */
import {TDateISO} from "./dates";


type ActivityLogEvent = 'started' | 'completed'

export interface ActivityLog {
  event: ActivityLogEvent  // which event has been done
  elementId: string | undefined;  // which step this log concerns
  datetime: TDateISO | undefined;  // when the activity has been recorded
}
