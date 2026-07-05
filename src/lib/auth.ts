/**
 * Auth foundation stub — Phase 1.
 *
 * Real authentication (session handling, roles, providers) arrives in the
 * portal phase. Keeping the guard here means portal layouts already call it,
 * so enabling real auth later is a one-file change.
 */
export function isAuthenticated(): boolean {
  return true;
}
