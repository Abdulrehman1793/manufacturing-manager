import { Role } from './enums/role';

export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  role: Role;
}
