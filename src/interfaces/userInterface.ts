import { User, Gender, UserType } from "@prisma/client";

export type UserInterface = User & {

};

export type UsersQueryParams = Pick<UserInterface, 'usertype' | 'gender' | 'createdat' | 'updatedat'>;