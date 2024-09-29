type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type userFilterStrings = 'name' | 'email' | 'phone';
export type option = { label: string; value: userFilterStrings };
export const usersFilterOptions: option[] = [
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
];
