export type TTodo = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isCompleted: boolean;
};

export type TTodos = {
  count: number;
  id: number;
  todos: TTodo[];
};
