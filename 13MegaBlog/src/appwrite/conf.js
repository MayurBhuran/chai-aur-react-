import conf from "../Conf.js";
import { Client, ID, Databases,Storage,Query } from 
"appwrite";

export class Service {
  Client = new Client();
  Databases;
  bucket;
  constructor() {
    this.Client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.Databases = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
    this.b = new b(this.Client);
  } 
}

const service = new Service();
export default service;