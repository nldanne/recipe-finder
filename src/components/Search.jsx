import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/searched/' + searchInput);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch ></FaSearch>
        <input 
          onChange={(e) => setSearchInput(e.target.value)}
          type="text" 
          value={searchInput} 
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 10%;
  
  div {
    position: relative;
    width: 100%;
    
  }
  
  input {
    border: none;
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 2rem;
    outline: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 100%;
    height: 32px;
    text-indent: 36px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;