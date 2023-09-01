export class User {
  Email?: string;
  Password?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  City?: string;
  State?: string;
  memberSince?: string = Date.toLocaleString();

  constructor(email?: string, password?: string, firstname?: string, lastname?: string, city?: string,
    state?: string, membersince?: string) {

    this.Email = email;
    this.Password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.City = city;
    this.State = state;
    this.memberSince = membersince;

  }

}
