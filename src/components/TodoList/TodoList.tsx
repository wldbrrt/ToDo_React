import { Box, Typography } from "@mui/material";
import { todoList, noResulttitle } from "./style";
import { Todoitem } from "./TodoItem/Todoitem";
import { useTodos } from "../../store/hooks";
import { useSearchParams } from "react-router-dom";
import { TODOLIST_NO_CONTENT } from "./TodoItem/constants";

export const TodoList = () => {
  const [searchParams] = useSearchParams();
  const { todos } = useTodos();
  const filterParam = searchParams.get("filter");

  const filteredTodos = filterParam
    ? todos.filter((todo) => {
        const filterTags = filterParam.split(",");
        return filterTags.every((tag) => todo.tags.includes(tag));
      })
    : [...todos];

  const data = filteredTodos;

  return (
    <Box sx={todoList}>
      {!data.length && (
        <Typography sx={noResulttitle}>{TODOLIST_NO_CONTENT}</Typography>
      )}
      {data.reverse().map((todo) => (
        <Todoitem
          key={todo.id}
          title={todo.title}
          content={todo.content}
          isCompleted={todo.isCompleted}
          id={todo.id}
          tags={todo.tags}
        />
      ))}
    </Box>
  );
};
