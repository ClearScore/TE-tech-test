export type User = {
  firstName: string;
};

export type CreateUserSessionArgs = {
  request: Request;
  user: User;
};

export type DestroyUserSessionArgs = {
  request: Request;
};
