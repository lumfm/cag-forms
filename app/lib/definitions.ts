export enum callerRelationship {
  insured = "insured",
  claimant = "claimant",
  attorney = "attorney",
  adjuster = "adjuster",
  agent = "agent",
  medicalProvider = "medicalProvider",
  other = "other",
}

export enum languageEnums {
  english = 'english',
  spanish = 'spanish',
  creole = 'creole',
  other = 'other',
}

export interface BasicInputs {
  policy_claim: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  alternativeNumber?: string;
  languagePref: languageEnums;
  languageOther? : string;
  relationship: callerRelationship;
  relationshipOther? : string;
  date_of_loss? : Date;
}

export enum IntakeReasonEnums {
  accident= 'accident',
  status= 'status',
  fire= 'fire',
  theft= 'theft',
  other= 'other',
}

export interface IntakeReasonInputs {
  reason: IntakeReasonEnums,
  description?: string,
  intake: string,
}

export interface IntakeLossTypeInputs {
  description: string,
  loss_type: string,
}

export interface MonarchAddressInputs {
  email: string;
  address1: string;
  address2?: string;
  zip_code: string;
  city: string;
  county: string;
  state: string;
}