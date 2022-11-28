import styled from "styled-components";

export const TableForm = styled.table`
    width: 500px;
    margin-bottom: 20px;
    border: 5px solid #fff;
    border-top: 5px solid #fff;
    border-bottom: 3px solid #fff;
    border-collapse: collapse;
    outline: 3px solid #ffd300;
    font-size: 15px;
    background: #fff !important;
 th {
    font-weight: bold;
    padding: 7px;
    background: #ffd300;
    border: none;
    text-align: left;
    font-size: 15px;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #ffd300;
  }
 td {
    padding: 7px;
    border: none;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    font-size: 15px;
  }
tbody tr:nth-child(even) {
    background: #f8f8f8 !important;
  }`
