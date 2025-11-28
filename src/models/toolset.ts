export interface Toolset {
  id: string;
  name: string;
  category: string;
  status: "Available" | "In Use";
  tools: Tool[];
  checkedOutBy?: string;
  missingTools?: string[];
  qrCodeUrl?: string;
}

export interface Tool {
  id: string;
  name: string;
  icon?: string;
  present: boolean;
  category: string;
}