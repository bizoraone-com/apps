export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface BusinessStats {
  totalRevenue: number;
  activeUsers: number;
}
