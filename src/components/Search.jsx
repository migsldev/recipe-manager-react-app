import styled from "styled-components";
import{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; //navigate upon entering a different page

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault(); // prevents refresh of page
        navigate('/searched/' + input);
        setInput(""); // Clear input after submitting
    };
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                    onChange={(e) => setInput(e.target.value)} //event listener to detect keyboard inputs
                    type="text" 
                    value={input}
                    placeholder="search"
                />
            </div>
        </FormStyle>
    )
}

//styling form
const FormStyle = styled.form`
    margin: 0rem 10rem;

    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;

    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search
