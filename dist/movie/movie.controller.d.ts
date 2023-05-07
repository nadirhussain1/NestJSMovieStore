export declare class MovieController {
    private data;
    getAllMovies(): {
        id: number;
        title: string;
        year: number;
    }[];
    getOneMovie(id: string): {
        id: number;
        title: string;
        year: number;
    };
    createNewMovie(movie: any): any;
    udpateMovie(id: string, movie: any): any;
    removeMovie(id: string): void;
}
