import {UserType} from './user-type';

export interface UserTO {

  id: number;
  name: string;
  emailAddress: string;
  userType: UserType;

}
