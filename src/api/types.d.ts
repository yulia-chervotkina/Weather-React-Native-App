// API types

export type FetchData =
    | { city: string; latitude: undefined; longitude: undefined }
    | { city: undefined; latitude: number; longitude: number };
