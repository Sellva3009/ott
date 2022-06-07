import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const FormDiv = styled.form`
    position: relative;
`;

const InputDiv = styled.input`
  width: 220px;
  padding: 0 35px 0 0;
  height: 35px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  &:focus {
      width: 300px;
  }
  &:placeholder {
    color: #fff;
  }
`;

const Btn = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  font-size: 18px;
  position: absolute;
  content: "";
  right: 0;
  top: 9px;
  cursor: pointer;
  &:hover {
    background: transparent;
  }
`;

function handleSubmit(e) {
    e.preventDefault();
    alert('Submitted');
}

function Search() {
  return (
    <FormDiv onSubmit={handleSubmit}>
      <InputDiv type="text" placeholder="Search" />
      <Btn>
        <AiOutlineSearch />
      </Btn>
    </FormDiv>
  );
}

export default Search;
