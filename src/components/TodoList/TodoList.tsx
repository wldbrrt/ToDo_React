import { Box, Typography } from "@mui/material";
import { todoList, noResulttitle, todoDateStyles } from "./style";
import { Todoitem } from "./TodoItem/Todoitem";
import { useScreenSize, useTodos } from "../../store/hooks";
import { useSearchParams } from "react-router-dom";
import { TODOLIST_NO_CONTENT } from "./TodoItem/constants";
import { getFormatDate } from "../../utils/getFormatDate";
import { TTodo } from "../../types/todos";

interface IDateObj {
  [key: string]: TTodo[];
}

export const TodoList = () => {
  const [searchParams] = useSearchParams();
  const { todos } = useTodos();
  const screenSize = useScreenSize();
  const filterParam = searchParams.get("filter");

  const filteredTodos = filterParam
    ? todos.filter((todo) => {
        const filterTags = filterParam.split(",");
        return filterTags.every((tag) => todo.tags.includes(tag));
      })
    : [...todos];

  const data = filteredTodos;

  const dataObject: IDateObj = {};
  data.forEach((e) => {
    const dateKey = getFormatDate(new Date(e.date).toISOString());
    if (dataObject[dateKey]) {
      dataObject[dateKey].push(e);
    } else {
      dataObject[dateKey] = [e];
    }
  });

  const filtredByDaysData = Object.values(dataObject);

  return (
    <Box sx={todoList(screenSize)}>
      {!data.length && (
        <Typography sx={noResulttitle}>{TODOLIST_NO_CONTENT}</Typography>
      )}
      {filtredByDaysData.reverse().map((e, ind) => {
        const currentDate = getFormatDate(new Date().toISOString());
        const todoDate = getFormatDate(new Date(e[0].date).toISOString());
        const dateString = `${new Date(e[0].date).getDate()}.${
          new Date(e[0].date).getMonth() + 1
        }.${new Date(e[0].date).getFullYear()}`;

        return (
          <>
            <Typography sx={todoDateStyles}>
              {currentDate === todoDate ? "Today" : dateString}
            </Typography>
            {e.reverse().map((todo) => (
              <Todoitem
                title={todo.title}
                content={todo.content}
                isCompleted={todo.isCompleted}
                id={todo.id}
                tags={todo.tags}
                date={todo.date}
              />
            ))}
          </>
        );
      })}
    </Box>
  );
};
