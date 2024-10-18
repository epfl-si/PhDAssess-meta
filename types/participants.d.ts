export type Sciper = string;

export interface ParticipantsVariables {
  programAssistantSciper: Sciper | undefined;
  programAssistantEmail: string | undefined;
  programAssistantName: string | undefined;
  programAssistantFirstNameUsage: string | undefined;
  programAssistantLastNameUsage: string | undefined;

  phdStudentSciper: Sciper | undefined;
  phdStudentEmail: string | undefined;
  phdStudentName: string | undefined;
  phdStudentFirstNameUsage: string | undefined;
  phdStudentLastNameUsage: string | undefined;
  /*
   * Save additional data when we crawl students info.
   * Mainly used to generate the correct GED path.
   * These are the official names
   */
  phdStudentFirstName: string | undefined;
  phdStudentLastName: string | undefined;

  thesisDirectorSciper: Sciper | undefined;
  thesisDirectorEmail: string | undefined;
  thesisDirectorName: string | undefined;
  thesisDirectorFirstNameUsage: string | undefined;
  thesisDirectorLastNameUsage: string | undefined;

  thesisCoDirectorSciper: Sciper | undefined;
  thesisCoDirectorEmail: string | undefined;
  thesisCoDirectorName: string | undefined;
  thesisCoDirectorFirstNameUsage: string | undefined;
  thesisCoDirectorLastNameUsage: string | undefined;

  programDirectorSciper: Sciper | undefined;
  programDirectorEmail: string | undefined;
  programDirectorName: string | undefined;
  programDirectorFirstNameUsage: string | undefined;
  programDirectorLastNameUsage: string | undefined;

  mentorSciper: Sciper | undefined;
  mentorEmail: string | undefined;
  mentorName: string | undefined;
  mentorFirstNameUsage: string | undefined;
  mentorLastNameUsage: string | undefined;
}
