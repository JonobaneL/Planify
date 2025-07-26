export type User = {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  position?: string;
  username: string;
  avatar?: string;
  location?: string;
  phone?: string;
  role?: string; //change to role type
  type?: string; //change to role type
};

export type SignUserProps = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};
