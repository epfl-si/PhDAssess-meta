// selection of PDF flavors
export type PDFType =
  undefined |  // no PDF, thank you
  string |  // can be any string, but the ones below means they are a defined structure
  'collaborativeReview' |
  'unsatisfactory' |
  'notAgree'

/**
 * What kind of notification is.
 * For historical reason, the kind can be identified by the fromElementId, if it finishes with '_reminder'
 * If empty, default to 'awaitingForm'
 */
type NotificationType =
// the first notification sent when we inform the user that a task is waiting for his input
  'awaitingForm' |
  'reminder' // when we remind the user about his task

// Zeebe message format sent to the notifier service from the app
// all entries are encrypted
export interface NotificationStartMessage {
  to?: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  subject?: string
  message?: string
  fromElementId?: string  // source calling the notifier; it will be saved into logs
  pdfType?: PDFType  // in case a PDF is wanted
  pdfName?: string  // in case we want a custom name for this PDF
  type?: NotificationType
}

// this one will be encrypted as a pack before being stack into notificationLogs by a bpmn Output
export interface NotificationLog {
  sentAt: string
  sentTo: {
    to: string[]
    cc: string[]
    bcc: string[]
  }

  // Define which activity has called the notification
  fromElementId: string
  type: NotificationType
}
