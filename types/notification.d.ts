// selection of PDF flavors
type PDFType =
  undefined |  // no pdf, thank you
  string |  // can be any string, but the ones below means they are a defined structure
  'collaborativeReview' |
  'unsatisfactory' |
  'notAgree'

// Zeebe message format sent to the notifier service from the app
// all entries are encrypted
export interface NotificationStartMessage {
  to?: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  subject?: string
  message?: string
  fromElementId?: string  // source calling the notifier. Will be saved into logs
  pdfType?: PDFType  // in case a pdf is wanted
  pdfName?: string  // in case we want a custom name for this pdf
}

// this one will be encrypted as a pack before being stack into notificationLogs by a bpmn Output
export interface NotificationLog {
  sentAt: string
  sentTo: {
    to: string[]
    cc: string[]
    bcc: string[]
  }
  fromElementId: string  // define which activity has called the notification
}
