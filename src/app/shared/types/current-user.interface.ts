export interface CurrentUser {
  id: number;
  email: string;
  createdAt: string;
  updateAt: string;
  username: string;
  bio?: string;
  image?: string;
  token: string;
}
