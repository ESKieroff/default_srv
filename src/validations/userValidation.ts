import { min } from 'date-fns';
import * as z from 'zod';

export const userData = z.object({
  userid: z.number(),
  username: z.string().toLowerCase(),
  email: z.coerce.string()
    .toLowerCase()
    .email({ message: "Invalid email address" })
    .min(9, { message: "Must be 5 or more characters long" }),
  password: z.string()
    .min(6, { message: "Must be 5 or more characters long" })
    .max(20, { message: "abracadabra" }),
  firstname: z.string().nullable(),
  lastname: z.string().nullable(),
  photo: z.unknown().nullable(),
  biography: z.coerce.string().nullable(),
  tittle: z.string().nullable(),
  description: z.coerce.string().nullable(),
  birth: z.coerce.date().nullable(),
  phone: z.coerce.string().nullable(),
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
    tiktok: z.string().url(),
  }).nullable(),
  configurations: z.object({
    linkedin: z.string().url({ message: "Invalid url" }),
    discord: z.string().url(),
    facebook: z.string().url(),
    instagram: z.string().url(),
    youtube: z.string().url(),
    tiktok: z.string().url(),
  }).nullable(),
  country: z.enum(["BRAZIL", "UNITED_STATES", "GERMANY", "JAPAN"]).nullable(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]).nullable(),
  usertype: z.enum(["ERP", "PUBLIC", "API", "SYSTEM", "ANONYMOUS", "ROOT"]),
  active: z.boolean({
    required_error: "active is required",
    invalid_type_error: "active must be a boolean",
  }).default(true),
  createdat: z.coerce.date(),
  updatedat: z.coerce.date(),
});



export const userQueryParamsSchema = userData.partial().pick({
  usertype: true,
  gender: true,
  createdat: true,
  updatedat: true
}).transform((data) => ({
  ...data,
  createdat: data.createdat ? new Date(data.createdat) : undefined,
  updatedat: data.updatedat ? new Date(data.updatedat) : undefined,
})).refine((data) => {

  if (data.gender && !['MALE', 'FEMALE', 'OTHER'].includes(data.gender as string)) {
    return { message: 'Gender must be MALE, FEMALE, or OTHER' };
  }

  if (data.usertype && !['SYSTEM', 'REGULAR'].includes(data.usertype as string)) {
    return { message: 'Usertype must be SYSTEM or REGULAR' };
  }

  return true;
});
