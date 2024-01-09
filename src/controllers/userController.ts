import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode, } from 'http-status-codes';
import { userData } from '../validations/userValidation';
import * as userService from "../services/userService";
import { Request, Response } from "express";

export const createUser = async (userData: any) => {

};

export const updateUser = async (userData: any) => {

};

export const listAllUsers = async (req: Request, res: Response) => {

  try {
    const {
      userid, usertype, gender, createdat, updatedat
    } = req.query as Record<string, any>;

    const result = await userService.listAllUsers({
      userid, usertype, gender, createdat, updatedat
    });

    res.json(result);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const removeUser = async (userData: any) => {

};

export const getUserById = async (userData: any) => {

};

export const getUserByEmail = async (userData: any) => {

};

export const getUserNamebyEmail = async (userData: any) => {

}