"use client";

type TodoItemProps = {
  id: string;
  deleteTodo: (id: string) => void;
};

export function DeleteButton({ id, deleteTodo }: TodoItemProps) {
  return (<input id={id} type="button" onClick={(e) => deleteTodo(id)} />);
}
