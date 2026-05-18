export enum MaintenanceType {
  OIL_CHANGE = 'OIL_CHANGE',
  BRAKE_CHECK = 'BRAKE_CHECK',
  TIRE_CHANGE = 'TIRE_CHANGE',
  PREVENTIVE = 'PREVENTIVE',
  AIR_FILTER = 'AIR_FILTER',
  CHAIN_SPROCKET = 'CHAIN_SPROCKET',
  ELECTRICAL = 'ELECTRICAL',
  OTHER = 'OTHER',
}

export enum MaintenanceSortBy {
  DATE = 'date',
  TYPE = 'type',
  NEXT_MAINTENANCE = 'nextMaintenance',
}

export enum MaintenanceMode {
  COMPLETED = 'COMPLETED',
  SCHEDULED = 'SCHEDULED',
}
