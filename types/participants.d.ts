export type Sciper = string;

export interface ParticipantsVariables {
  programAssistantSciper: Sciper | undefined;
  programAssistantEmail: string | undefined;
  programAssistantName: string | undefined;

  phdStudentSciper: Sciper | undefined;
  phdStudentEmail: string | undefined;
  phdStudentName: string | undefined;
  /*
   * Save additional data when we crawl students info.
   * Mainly used to generate the correct GED path
   */
  phdStudentFirstName: string | undefined;
  phdStudentLastName: string | undefined;

  thesisDirectorSciper: Sciper | undefined;
  thesisDirectorEmail: string | undefined;
  thesisDirectorName: string | undefined;

  thesisCoDirectorSciper: Sciper | undefined;
  thesisCoDirectorEmail: string | undefined;
  thesisCoDirectorName: string | undefined;

  programDirectorSciper: Sciper | undefined;
  programDirectorEmail: string | undefined;
  programDirectorName: string | undefined;

  mentorSciper: Sciper | undefined;
  mentorEmail: string | undefined;
  mentorName: string | undefined;
}
