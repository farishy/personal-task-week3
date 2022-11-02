import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Dialog>
        <div>
          <DialogHeader>
            <div>ID :{todo.id}</div>
            <Button
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </Button>
          </DialogHeader>
          <Title>{todo.title}</Title>
          <Body>{todo.body}</Body>
        </div>
      </Dialog>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const Title = styled.h1`
  padding: 0 24px;
`;

const Body = styled.main`
  padding: 0 24px;
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
  }
`;
