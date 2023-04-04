export type User = {
  firstName: string;
};

export type CreateUserSessionArgs = {
  request: Request;
  user: User;
  options: {
    persist: boolean;
  };
};

export type DestroyUserSessionArgs = {
  request: Request;
};
