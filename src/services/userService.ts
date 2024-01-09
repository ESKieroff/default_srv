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
  // return needs to be a DTO format for specific presentation of results.
};

export const removeUser = async (userData: any) => {

};

export const getUserById = async (userData: any) => {

};

export const getUserByEmail = async (userData: any) => {

};

export const getUserNamebyEmail = async (userData: any) => {

}