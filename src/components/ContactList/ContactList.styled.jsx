import styled from 'styled-components';

export const List = styled.ul`
margin-top: 20px;
`;
export const Item = styled.li`
:not(:first-child){
  margin-top: 15px;
}

:nth-child(2n+1){
 background-color: #f3ba36;
}
`;