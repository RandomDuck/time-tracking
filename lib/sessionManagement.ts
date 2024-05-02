import { Company } from "@/assets/models/Company";
import { User } from "@/assets/models/User";
import { Session, AccessLevel } from "@/assets/models/Session";
import { cookies } from 'next/headers'
import { TimeInMS } from "@/assets/constants/enums";


const cookieID = 'session';

function GenerateSession(user: User, UserName: string, Company: Company | null, admin: boolean): Session {
  let levelOfAccess;
  if (admin) {
    levelOfAccess = AccessLevel.admin;
  } else if (Company === null) {
    levelOfAccess = AccessLevel.user;
  } else {
    levelOfAccess = Company.admin ? AccessLevel.companyAdmin : AccessLevel.companyUser;
  }

  return { Id: user.id, Name: user.name, Email: user.email, UserName, Company, AccessLevel: levelOfAccess };

};

export async function setSession(user: User, UserName: string, Company: Company | null, admin: boolean) {
  cookies().set(cookieID, JSON.stringify(GenerateSession(user, UserName, Company, admin)), { maxAge: TimeInMS.oneDay })
};

export async function removeSession() {
  cookies().delete(cookieID)
};

export function getSession(): Session {
  const foundCookie = cookies().get(cookieID);
  const data = JSON.parse(String(foundCookie));
  return { Id: data.Id, Name: data.Name, Email: data.Email, UserName: data.UserName, Company: data.Company, AccessLevel: data.AccessLevel }
};
