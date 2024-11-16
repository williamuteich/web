export interface typeUserSession {
    name: string | null
    email: string | null;
    role: string | null;
}
  
  interface Session {
    user?: typeUserSession;
  }