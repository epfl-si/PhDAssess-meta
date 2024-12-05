/**
 * All the known fields saved as variables into the zeebe process instance.
 */
import {ParticipantsVariables} from "./participants";
import {StepsDefinition} from "./dashboards";
import {TDateISO, TFlatDate} from "./dates";


// these are created at the start of the all instances
interface _PhDAssessStartEventVariables {
  dashboardDefinition: StepsDefinition | undefined;  // defines the rules/flow of the dashboard
  // encrypted stack of NotificationLog entries. As it is encrypted, it is
  // a string. Once decrypted and JSON.parsed, it becomes
  // a type of NotificationLog[]
  notificationLogs: string[] | undefined;
}

interface _PhDAssessVariables {
  agreePhd: string | undefined;
  agreeThesisCoDirector: string | undefined;
  agreeThesisDirector: string | undefined;
  annualReportOf: string | undefined;
  commonComment1: string | undefined;
  commonComment2: string | undefined;
  commonComment3: string | undefined;
  commonComment4: string | undefined;
  commonComment5: string | undefined;
  commonComment6: string | undefined;
  created_at: TDateISO | undefined;
  created_by: TDateISO | undefined;
  creditsCompleted: string | undefined;
  creditsNeeded: string | undefined;
  creditsPlanned: string | undefined;
  dateOfCandidacyExam: TFlatDate | undefined;  // as dd.MM.yyyy
  dateOfEnrolment: TFlatDate | undefined;  // as dd.MM.yyyy
  dateSent: string | undefined;
  dueDate: TFlatDate | undefined;  // as dd.MM.yyyy
  docLinkAnnualReport: string | undefined;
  doctoralProgramEmail: string | undefined;
  doctoralProgramName: string | undefined;
  educationalActivities: string | undefined;
  generalAppraisalOfTheProgress: string | undefined;
  goalsOfTheThesis: string | undefined;
  haveTheObjectivesChangedInThePastYearIfSoWhyAndHow: string | undefined;
  mentorDate: string | undefined;
  notAgree: string | undefined;
  PDF: string | undefined;  // oldies, should not be anymore in the process instance variables in new versions
  phdComment: string | undefined;
  phdComment1: string | undefined;
  phdComment2: string | undefined;
  phdComment3: string | undefined;
  phdComment4: string | undefined;
  phdComment5: string | undefined;
  phdComment6: string | undefined;
  phdDate: string | undefined;
  phdDateOfReview: string | undefined;
  programDirectorSciper: string | undefined;
  programDirectorComment: string | undefined;
  programDirectorDate: string | undefined;
  programDirectorName: string | undefined;
  programDirectorNotif: string | undefined;
  researchObjectivesForTheNextYear: string | undefined;
  researchProgressDuringThePastYear: string | undefined;
  scientificOutput: string | undefined;
  taDuties: string | undefined;
  taDutiesHoursAndOrCoursesCompleted: string | undefined;
  tentativeThesisTitle: string | undefined;
  thesisCoDirector: string | undefined;
  thesisCoDirectorComment: string | undefined;
  thesisCoDirectorComment1: string | undefined;
  thesisCoDirectorComment2: string | undefined;
  thesisCoDirectorComment3: string | undefined;
  thesisCoDirectorComment4: string | undefined;
  thesisCoDirectorComment5: string | undefined;
  thesisCoDirectorComment6: string | undefined;
  thesisCoDirectorDateOfReview: string | undefined;
  thesisCoDirectorName: string | undefined;
  thesisDirectorComment: string | undefined;
  thesisDirectorComment1: string | undefined;
  thesisDirectorComment2: string | undefined;
  thesisDirectorComment3: string | undefined;
  thesisDirectorComment4: string | undefined;
  thesisDirectorComment5: string | undefined;
  thesisDirectorComment6: string | undefined;
  thesisDirectorDateOfReview: string | undefined;
  timelineOfThePlannedWorkForTheNextYear: string | undefined;
  totalCreditsObtained: string | undefined;
  totalCreditsPlanned: string | undefined;
  uuid: string | undefined;
  updated_at: TDateISO | undefined;  // as ISO date
  year: string | undefined;  // as custom text, ex. '2nd year'
}

export interface PhDAssessVariables extends
  _PhDAssessStartEventVariables,
  _PhDAssessVariables,
  ParticipantsVariables {}
