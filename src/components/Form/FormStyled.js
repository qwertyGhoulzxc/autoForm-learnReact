import styled from "styled-components";

export const Input= styled.input`
outline: none;
  width: 200px;


`

export const Button = styled.button`
 
    display: inline-block;
    box-sizing: border-box;
    padding: 0 24px;
    margin: 0 15px 15px 0;
    outline: none;
    border: none;
    border-radius: 3px;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    text-decoration: none;
    color: #fff;
    background-color: #05cd51;
    cursor: pointer;
    user-select: none;
    appearance: none;
    touch-action: manipulation;
    transition: box-shadow .18s ease-out, background .18s ease-out, color .18s ease-out;
  

 :focus-visible {
    box-shadow: 0 0 0 3px lightskyblue;
  }

:hover {
    box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
  }

:active {
    background-color: #058c38 !important;
  }

:disabled {
    background-color: #aed2bc;
    color: #444;
    pointer-events: none;
  }    

`