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
  languagePref: string;
  languageOther? : string;
  relationship: string;
  relationshipOther? : string;
  date_of_loss? : string;
  date_time_of_loss? : string;
}

export type IntakeReasonEnums = 'accident' | 'status' | 'fire' | 'theft' | 'other' | '';


export interface IntakeReasonInputs {
  reason: string,
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