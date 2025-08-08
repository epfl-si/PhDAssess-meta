/*
 * Input-Output that transits between the builder and the notifier, as the PDF variable.
 * Used as input, then set to "" by the output. See the bpmn for details
 */
interface _PDFBuilderToNotifInputOutput {
  collaborativeReviewPDF: string | undefined;
  notAgreePDF: string | undefined;
  unsatisfactoryPDF: string | undefined;
}
