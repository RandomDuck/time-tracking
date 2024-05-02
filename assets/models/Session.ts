import { Company } from "@/assets/models/Company";

export enum AccessLevel {
  user,
  companyUser,
  companyAdmin,
  admin
}

export interface Session {
  Id: string,
  Name: string,
  Email: string,
  UserName: string,
  Company: Company | null,
  AccessLevel: AccessLevel,
};

