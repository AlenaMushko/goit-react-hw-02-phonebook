import styled from 'styled-components';

export const Form = styled.form`
 display: flex;
 gap:30px;
 margin:30px 0;
 padding: 60px;
 border: 2px solid  rgb(8, 8, 118);
`;

export const FormInput = styled.input`
margin-left: 15px;
border:none;
font-size:18px;
:hover, :focus{
  outline:none;
  border: 2px solid  #f3ba36;
}
`;

export const FormButton = styled.button`
padding:4px;
font-size:16px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  background-color: white; 
  color:rgb(8, 8, 118);
  border:2px solid rgb(8, 8, 118);
}
`;
