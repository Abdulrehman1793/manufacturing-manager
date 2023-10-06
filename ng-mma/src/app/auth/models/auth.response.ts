import { User } from 'src/app/core/models';

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}
