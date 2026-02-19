import conf from "../Conf/conf.js";
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
    
  } 
  async createPost({title,slug, content,status,
    featureImage, userId}) {
      try {
        return await this.Databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          ID.unique(),
          {
            title,
             slug, 
             content, 
             status, 
             featureImage,
              userId,
          }
        );
        
      } catch (error) {
        console.log("Appwrite service :: createPost :: error ", 
          error);
      }
      }

  async updatePost({id, title,slug, content,status,
    featureImage, userId}) {
      try {
        return await this.Databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          id,
          {
            title,
             slug,
             content, 
             status, 
             featureImage,
              userId,
          }
        );
      } catch (error) {
        console.log("Appwrite service :: updatePost :: error ", error);
      }
    }

  async deletePost(slug) {
    try {
     return await this.Databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error ", error);
      return false;
     } 
   }

   async getPosts(slug) {
    try {
      return await this.Databases.getDocument( 
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return posts;
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error ", error);
      return false;
    }   
  }
  async getAllPosts(qureies = [Query.equal("status", "active")]) {
    try {
      return await this.Databases.listDocuments(   
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        qureies,
        100,
      );
      return posts;
    } catch (error) {
      console.log("Appwrite service :: getAllPosts :: error ", error);
      return false;
    } 
  }

  //file uploadservice

  async uploadFile(file) {
    try {
      const response = await this.bucket.createFile(  
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
      return response;
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error ", error);
      return false;
    }
  }

  async deletefile(fileId) {
    try {
      return await this.bucket.deleteFile(  
        conf.appwriteBucketId,
        fileId,
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletefile :: error ", error);
      return false;
    } 
  }

  async getFilePreview(fileId) {  
    try {
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );
      return response;
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error ", error);
      return false;
    }
  }
}


const service = new Service();
export default service;