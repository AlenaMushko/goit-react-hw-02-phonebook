import styled from 'styled-components';

export const ElWraper = styled.div`
display: flex;
gap:20px;
align-items: center;
`;

export const ElButton = styled.button`
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  background-color: white; 
  color:rgb(8, 8, 118);
  border:2px solid rgb(8, 8, 118);
}
`;

