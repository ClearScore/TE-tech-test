export type User = {
  firstName: string;
  score: number;
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
