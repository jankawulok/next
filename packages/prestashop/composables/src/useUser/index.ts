/* istanbul ignore file */

import { UseUser, useUserFactory, UseUserFactoryParams } from '@vue-storefront/core';
import { Customer } from '../types/GraphQlStorefront';


// @todo useUser

const params: UseUserFactoryParams<any, any, any> = {
  loadUser: async () => {
    // @todo
    return {};
  },
  logOut: async () => {
    // @todo
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async ({currentUser, updatedUserData}): Promise<any> => {
    // @todo
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async ({email, password, firstName, lastName}) => {
    // @todo
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async ({ username, password }) => {
    // @todo
    return {};
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async function changePassword({currentUser, currentPassword, newPassword}) {
    // @todo
    return {};
  }
};

const useUser: () => UseUser<any, any> = useUserFactory<any, any, any>(params);

export default useUser;