

interface BaseUser {
  id: string;
  name: string;
  age: number;
}

interface User2 {
  id: number;
  phone: string;
};

interface User extends BaseUser, User2 {}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
