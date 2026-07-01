import { BloodType } from '../../users/enums';
import { RegistrationStatus } from '../enums';
import { VehicleSummaryDto } from './vehicle-summary.dto';

export class EventRegistrationDto {
  id!: string;
  eventId!: string;
  eventName!: string;
  userId!: string;
  status!: RegistrationStatus;

  fullName!: string;
  identificationNumber!: string;
  birthDate!: Date;
  phone!: string;
  email!: string;
  residenceCity!: string;

  eps!: string;
  medicalInsurance?: string | null;
  bloodType!: BloodType;

  emergencyContactName!: string;
  emergencyContactPhone!: string;

  vehicleId!: string | null;
  vehicleSummary?: VehicleSummaryDto | null;

  shareMedicalInfo!: boolean;
  allowOrganizerContact!: boolean;
  riskAcceptedAt!: Date | null;
  riskAcceptanceVersion!: string | null;

  createdAt!: Date;
  updatedAt!: Date;
}
