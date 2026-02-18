export interface Book {
  id: string;
  title: string;
  authors: string[];
  description?: string;
  categories?: string[];
  thumbnail?: string;
}

export type ReadingStatus = "To Read" | "Reading" | "Finished";

export interface ReadingBook extends Book {
  status: ReadingStatus;
}
