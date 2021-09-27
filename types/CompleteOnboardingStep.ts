/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MarkOnboardingStepAsDoneInput, OnboardingStep } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CompleteOnboardingStep
// ====================================================

export interface CompleteOnboardingStep_markOnboardingStepDone {
  __typename: 'MarkOnboardingStepAsDoneResponse';
  remainingOnboardingSteps: OnboardingStep[];
}

export interface CompleteOnboardingStep {
  markOnboardingStepDone: CompleteOnboardingStep_markOnboardingStepDone;
}

export interface CompleteOnboardingStepVariables {
  input: MarkOnboardingStepAsDoneInput;
}
