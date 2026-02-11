import conf from "../conf/Conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
  Client = new Client();
  Account;

  constructor() {
    this.Client
      .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.Account = new Account(this.Client);
  }
  

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.Account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login(email, password);
      }
      else {
        return null;
      }

    } catch (error) {
      throw error;

    }
  }
  async login(email, password) {
    try {
      const session = await this.account.createEmailSession(email, password);
      return session;
    } catch (error) {
      throw error;
    }
}
async currentUser() { 
  try {
    return await this.Account.get();
    
  } catch (error) {
    console.log("Appwrite service :: currentUser :: error ", error);
 
  } 
  return null;
  }
async logout() {
  try {
    await this.Account.deleteSession();
  } catch (error) {
    console.log("Appwrite service :: logout :: error ", error);
  }
}
}

const authService = new AuthService
(
  
);


export default authService