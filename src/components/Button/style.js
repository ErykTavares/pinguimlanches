import styled from 'styled-components';

export const ButtonStyle = styled.button`
    width: ${({width})=> width? width : "150px"} ;
    height:${({height})=> height?  height : "35px"};
    border-radius: 3px;
    background-color:${({bgcolor})=> bgcolor?  bgcolor : "var(--red)" } ;
    color: var(--textwhite);
    font-family: "single day", cursive;
    font-size: 1.1rem;
    border: none;
    box-shadow: 0px 4px 84px 0px #FF000040;
    cursor: pointer;
    transition: .5s;
    &:hover{
        transform: scale(1.2);
    }
;
`