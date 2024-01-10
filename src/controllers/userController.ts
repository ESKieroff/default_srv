import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode, } from 'http-status-codes';
import { userData } from '../validations/userValidation';
import * as userService from "../services/userService";
import { Request, Response } from "express";
import { errorMessages, successMessages } from "../messages/messages";
import { UserInterface } from '../interfaces/userInterface';
import { UsersQueryParams } from '../interfaces/userInterface';
import { Gender, UserType } from '@prisma/client';



export const listAllUsers = async (req: Request, res: Response) => {

  try {
    const queryParamsRaw = userData.parse(req.query);
    const queryParams: UsersQueryParams = {
      ...queryParamsRaw,
      usertype: queryParamsRaw.usertype as UserType,
      gender: queryParamsRaw.gender as Gender,
      createdat: queryParamsRaw.createdat ? new Date(queryParamsRaw.createdat) : undefined,
      updatedat: queryParamsRaw.updatedat ? new Date(queryParamsRaw.updatedat) : undefined,
    };

    if (queryParams) {

      const result = await userService.listAllUsers(queryParams);
      res.json(result);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const removeUser = async (req: Request, res: Response) => {

  try {
    const userId = parseInt(req.params.id);
    const result = await userService.removeUser(userId);

    res.json({ message: "User removed successfully", result });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserById = async (userData: any) => {

};

export const getUserByEmail = async (userData: any) => {

};

export const getUserNamebyEmail = async (userData: any) => {

}

export const createUser = async (userData: any) => {

};

export const updateUser = async (userData: any) => {

};