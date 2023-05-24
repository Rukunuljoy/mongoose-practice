import { Model } from "mongoose";

export interface IUser{
    id: string;
    role:"student";
    password:string;
    name: {
      firstName:string;
      lastName:string;
    },
    dateOfBirth?:string;
    gender:"male" | "female";
    email:string;
    contactNo:string;
    emergencyContactNo:string;
    presentAddress:string;
    permanentAddress:string;
  }

  //statics
  interface UserModel extends Model<IUser> {
    getAdminUser(): IUser[];
  }

  //instances methods
 export interface IUserMethods {
    fullName(): string;
  }