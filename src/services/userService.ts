import { UsersQueryParams } from "../interfaces/userInterface";
import { errorMessages, successMessages } from "../messages/messages";
import * as userRepository from "../repositories/userRepository";

export const createUser = async (userData: any) => {

};

export const updateUser = async (userData: any) => {

};


export const listAllUsers = async (queryParams: any) => {

  const result = await userRepository.listAllUsers(queryParams);
  if (result.length === 0) {
    throw new Error(errorMessages.USERS_NOT_FOUND);
  }
  return result;
  // return needs to be a DTO for specific format presentation of results.
};

export const removeUser = async (userId: number) => {

  const existingUser = await userRepository.getUserById(userId);

  if (!existingUser) {
    throw new Error(errorMessages.USER_NOT_FOUND);
  }
  return await userRepository.removeUser(userId);
};

export const getUserById = async (userData: any) => {

};

export const getUserByEmail = async (userData: any) => {

};

export const getUserNamebyEmail = async (userData: any) => {

}