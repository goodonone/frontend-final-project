export class Post {
PostId?: String;
Chirp?: string;
ChirpDate?: string = Date.toLocaleString();

constructor(id?: string, chirp?: string, chirpDate?: string) {
        this.PostId = id;
        this.Chirp = chirp;
        this.ChirpDate = chirpDate;
}
}
