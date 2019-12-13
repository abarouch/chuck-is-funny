
export class JokeRec {
    id: number;
    joke: string;
    categories: string
}

export class JokesApi {
    type = "success";
    value: Array<JokeRec>
}
