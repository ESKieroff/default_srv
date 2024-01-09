import * as z from 'zod';

export const userData = z.object({
  userid: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string().min(6),
  firstname: z.string().nullable(),
  lastname: z.string().nullable(),
  photo: z.unknown().nullable(),
  biography: z.string().nullable(),
  tittle: z.string().nullable(),
  description: z.string().nullable(),
  birth: z.date().nullable(),
  phone: z.string().nullable(),
  profiledescription: z.string().nullable(),
  profilestatus: z.string().nullable(),
  socialnetwork: z.object({
    linkedin: z.string(),
    discord: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    youtube: z.string(),
    tiktok: z.string(),
  }).nullable(),
  interests: z.object({
    linkedin: z.string(),
    discord: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    youtube: z.string(),
    tiktok: z.string(),
  }).nullable(),
  preferences: z.object({
    linkedin: z.string(),
    discord: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    youtube: z.string(),
    tiktok: z.string(),
  }).nullable(),
  configurations: z.object({
    linkedin: z.string(),
    discord: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    youtube: z.string(),
    tiktok: z.string(),
  }).nullable(),
  country: z.string(),
  gender: z.string().nullable(),
  usertype: z.string(),
  active: z.boolean().default(true),
  createdat: z.date(),
  updatedat: z.date(),
});
