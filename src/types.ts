export type BookType = {
  bookName: string;
  author: string;
  releaseYear: number;
  pages: number;
  category: string;
  id: string;
};

export type BookCreateType = Omit<BookType, "id">;

export type BookNameEditType = Pick<BookType, "bookName" | "author">;

export type BookIdType = BookType["id"];

export type BookOptionalType = Partial<BookType>;
