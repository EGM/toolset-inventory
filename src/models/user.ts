export interface User {
  id: string;
  email: string;
  passwordHash?: string;
  name: string;
  crew?: string[];
  invites?: Invite[];
  preferences?: {
    mode: "light" | "dark";
    fontSize: "small" | "medium" | "large";
  };
}

export interface Invite {
  from: string;
  to: string;
  status: "pending" | "accepted" | "declined";
}