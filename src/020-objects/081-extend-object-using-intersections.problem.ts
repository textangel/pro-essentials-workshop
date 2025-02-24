import { Extends, Expect } from "@total-typescript/helpers";

type Entity = {
  id: string;
  createdAt: Date;
  name: string;
};

type User = Entity & {
  email: string;
};

type Product = Entity & {
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
