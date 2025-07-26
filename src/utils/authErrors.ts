export const handleAuthError = (error: string) => {
  switch (error) {
    case 'CredentialsSignin':
      return 'Invalid email or password. Please try again.';
    case 'Configuration':
      return 'Authentication service configuration error. Please contact support.';
    default:
      return error || 'Failed to sign in. Please try again.';
  }
};
