export default interface Todo {
  id: number;
  text: string;
  importance: number;
  completed: boolean;
  description?: string;
}
