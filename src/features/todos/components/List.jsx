import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../../redux/modules/todos.js";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <ListContainer>
      <h2>Working...</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <LinkStyled to={`/${todo.id}`} key={todo.id}>
                  <DetailsButton>Details</DetailsButton>
                </LinkStyled>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <DialogFooter>
                  <Button
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Hapus
                  </Button>
                  <Button
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Batal" : "Selesai"}
                  </Button>
                </DialogFooter>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <LinkStyled to={`/${todo.id}`} key={todo.id}>
                  <DetailsButton>Details</DetailsButton>
                </LinkStyled>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <DialogFooter>
                  <Button
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Hapus
                  </Button>
                  <Button
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Batal" : "Selesai"}
                  </Button>
                </DialogFooter>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const DialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const Button = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${({ borderColor }) => borderColor};
    color: white;
  }
`;

const DetailsButton = styled.div`
  &:hover {
    font-weight: 500;
  }
`;
