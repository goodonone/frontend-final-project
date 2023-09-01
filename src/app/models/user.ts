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
  // = Date.toLocaleString();

  constructor(userid?:number, email?: string, password?: string, firstname?: string, lastname?: string, city?: string,
    state?: string, membersince?: string, username?: string) {
    this.userId = userid;
    this.Email = email;
    this.Password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.City = city;
    this.State = state;
    this.memberSince = membersince;
    this.userName = username;
  }

}
