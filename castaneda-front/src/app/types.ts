export type Day = {
  due_back?: Date;
  dayOfMonth: number;
  dayOfWeek: string;
  month: string;
  date: Date;
  loaned?: boolean;
  typeOfMonth?: 'prev' | 'current' | 'next';
  selected?: 'start-selected' | 'between-selected' | 'end-selected';
}

export type User = {
  login: string;
  pass: string;
  role?: 'Admin' | 'User' | 'Director';
  id?: string;
}

export type Book = {
  title: string;
  author: string;
  number: number;
  year: number;
  subtitle: string;
  description: string;
  status: 'Available' | 'Loaned';
  img?: string;
  due_back?: Date;
}
