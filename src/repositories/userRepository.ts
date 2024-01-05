import { Prisma, PrismaClient } from "@prisma/client";
import { UserInterface } from "../interfaces/userInterface";

const prisma = new PrismaClient();
const actualDate = new Date();

export const createUser = async (userData: Partial<UserInterface>) => {
  const user = await prisma.user.create({
    data: {
      ...userData,
      createdat: actualDate,
      updatedat: actualDate
    } as Prisma.UserCreateInput
  });
  return user.userid;

};

export const updateUser = async (userData: Partial<UserInterface>) => {

  const {
    userid,
    username,
    email,
    password,
    firstname,
    lastname,
    photo,
    biography,
    tittle,
    description,
    birth,
    phone,
    profiledescription,
    profilestatus,
    socialnetwork,
    interests,
    preferences,
    configurations,
    country,
    gender,
    usertype,
    updatedat
  } = userData;

  return prisma.user.update({
    where: { userid },
    data: {
      ...(username && { username }),
      ...(email && { email }),
      ...(password && { password }),
      ...(firstname && { firstname }),
      ...(lastname && { lastname }),
      ...(photo && { photo }),
      ...(biography && { biography }),
      ...(tittle && { tittle }),
      ...(description && { description }),
      ...(birth && { birth }),
      ...(phone && { phone }),
      ...(profiledescription && { profiledescription }),
      ...(profilestatus && { profilestatus }),
      ...(socialnetwork && { socialnetwork }),
      ...(interests && { interests }),
      ...(preferences && { preferences }),
      ...(configurations && { configurations }),
      ...(country && { country }),
      ...(gender && { gender }),
      ...(usertype && { usertype }),
      updatedat: actualDate
    },

    select: {
      userid: true,
      username: true,
      email: true,
      password: true,
      firstname: true,
      lastname: true,
      photo: true,
      biography: true,
      tittle: true,
      description: true,
      birth: true,
      phone: true,
      profiledescription: true,
      profilestatus: true,
      socialnetwork: true,
      interests: true,
      preferences: true,
      configurations: true,
      country: true,
      gender: true,
      usertype: true,
      updatedat: true
    }
  });
};

export const listAllUsers = async (queryParams: any) => {
  const userWhereInput: Prisma.UserWhereInput = {
    active: true
  };

  if (queryParams.usertype) {
    userWhereInput.usertype = queryParams.usertype;
  }

  if (queryParams.gender) {
    userWhereInput.gender = queryParams.gender;
  }

  if (queryParams.createdAt) {
    userWhereInput.createdat = {
      gte: new Date(queryParams.createdat),
    };
  }

  if (queryParams.updatedat) {
    userWhereInput.updatedat = {
      gte: new Date(queryParams.updatedat),
    };
  }

  return prisma.user.findMany({
    where: userWhereInput,
    orderBy: {
      userid: 'asc'
    },
    select: {
      userid: true,
      username: true,
      firstname: true,
      lastname: true,
      birth: true,
      phone: true,
      socialnetwork: true,
      interests: true,
      country: true,
      gender: true,
      usertype: true,
      createdat: true,
      updatedat: true
    }
  });
};

export const getUserNamebyEmail = async (email: string) => {
  try {
    const { username } = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!username) {
      throw new Error('User not found');
    }
    return username;
  } catch (error) {
    throw error;
  }
};

export const removeUser = async (userId: number) => {

  return prisma.user.update({
    where: {
      userid: userId
    },
    data: {
      updatedat: actualDate,
      active: false
    },
    select: {
      userid: true
    }
  });

};

export const getUserById = async (userId: number) => {
  return prisma.user.findFirst({
    where: {
      userid: userId
    }
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
};