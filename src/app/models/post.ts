export class Post {
PostId?: number;
Chirp?: string;
ChirpDate?: string;

// = Date.toLocaleString()

constructor(id?: number, chirp?: string, chirpDate?: string) {
        this.PostId = id;
        this.Chirp = chirp;
        this.ChirpDate = chirpDate;
}
}
