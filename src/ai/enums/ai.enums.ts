export enum AiChatRole {
  USER = 'user',
  MODEL = 'model',
}

export enum AiErrorCode {
  NETWORK_ERROR = 'network_error',
  SAFETY_BLOCKED = 'safety_blocked',
  QUOTA_EXCEEDED_USER = 'quota_exceeded_user',
  QUOTA_EXCEEDED_PROJECT = 'quota_exceeded_project',
}
