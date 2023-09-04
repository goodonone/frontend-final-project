export class User {
  userId?:number;
  Email?: string;
  Password?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  City?: string;
  State?: string;
  memberSince?: string; 
  photoUrl?: string;
  Zipcode?: number;
  

  constructor(userid?:number, email?: string, password?: string, firstname?: string, lastname?: string, city?: string,
    state?: string, membersince?: string, username?: string, photoUrl?: string, zipcode?: number) {
    this.userId = userid;
    this.Email = email;
    this.Password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.City = city;
    this.State = state;
    this.memberSince = membersince;
    this.userName = username;
    this.photoUrl = photoUrl;
    this.Zipcode = zipcode;
  }

}
