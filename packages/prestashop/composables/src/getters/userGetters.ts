import { UserGetters} from '@vue-storefront/core';
import { Customer } from './../types/GraphQlStorefront';

export const getUserFirstName = (user: Customer): string => user ? user.firstname : '';

export const getUserLastName = (user: Customer): string => user ? user.lastname : '';

export const getUserFullName = (user: Customer): string => user ? `${user.firstname} ${user.lastname}` : '';

const userGetters: UserGetters<Customer> = {
  getFirstName: getUserFirstName,
  getLastName: getUserLastName,
  getFullName: getUserFullName
};

export default userGetters;
