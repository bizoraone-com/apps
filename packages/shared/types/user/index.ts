export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  businessStats: BusinessStats;
}


export interface BusinessStats {
  totalRevenue: number;
  activeUsers: number;
}
