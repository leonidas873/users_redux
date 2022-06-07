import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {RiEmotionHappyLine, RiEmotionUnhappyFill} from 'react-icons/ri';
import { deleteUser } from '../../features/users/UsersSlice';
import EditModal from './EditModal';

const UsersTable = () => {

const {users} = useSelector(state=>state);
const dispatch = useDispatch();

return (<StyledTable style={{maxWidth:'1200px', margin:'30px auto', padding:'30px'}}>
  <StyledTr>
    <StyledTh>name</StyledTh>
    <StyledTh>username</StyledTh>
    <StyledTh>email</StyledTh>
    <StyledTh>age</StyledTh>
    <StyledTh>merried</StyledTh>
    <StyledTh>comment</StyledTh>
    <StyledTh>edit/delete</StyledTh>
  </StyledTr>
{
    users.users?.map(user=><StyledTr key={user.id}>
        <StyledTd>{user.name}</StyledTd>
        <StyledTd>{user.surname}</StyledTd>
        <StyledTd>{user.email}</StyledTd>
        <StyledTd>{user.age}</StyledTd>
        <StyledTd>{user.merried == "yes" ? <RiEmotionHappyLine/> : <RiEmotionUnhappyFill/>}</StyledTd>
        <StyledTd>{user.comment ? user.comment : 'no comment'}</StyledTd>
        <StyledTd>
            <EditModal user={user}/>
            <ButtonStyled onClick={()=>dispatch(deleteUser(user.id))}>delete</ButtonStyled>
        </StyledTd>
      </StyledTr> 
    )
}
  


</StyledTable>
  );
};

export default UsersTable;

const StyledTable = styled.table`
    font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

`

const StyledTd = styled.td`
    border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`
const StyledTr = styled.tr`
    &:nth-child(even){
        background-color: #dddddd;
    }
`

const StyledTh = styled.th`
    border: 1px solid #dddddd;
  text-align: cemter;
  padding: 8px;
`

const ButtonStyled = styled.button`
    outline:none;
    border:none;
    background-color:red;
    color:white;
    margin:5px;
    border-radius:5px;
    padding:2px 6px;
    cursor:pointer;
`
