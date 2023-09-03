import { User } from "./user";

export class Post {
PostId?: number;
Chirp?: string;
ChirpDate?: string;
UserId?: number;
User?: User;

// = Date.toLocaleString()

constructor(id?: number, chirp?: string, chirpDate?: string, userId?: number, user?: User) {
        this.PostId = id;
        this.Chirp = chirp;
        this.ChirpDate = chirpDate;
        this.User = user;
}
}
