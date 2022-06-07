import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Checkbox, Radio, message  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  editUser } from '../../features/users/UsersSlice';


const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      surname:'${label} is not a valid surname!',
      number: '${label} is not a valid number!',
      
    },
    number: {
      range: '${label} must be more than ${min}',
    },
  };
  


const EditModal = ({user}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

//    form 

const {users} = useSelector(state=>state);
const dispatch = useDispatch();

console.log(users);
const [form] = Form.useForm();

const openMessage = () => {
  message.loading({
    content: 'Loading...',
    key:'loading'
  });
  setTimeout(() => {
    message.success({
      content: 'you have succesfully edited',
      duration: 1,
      key:'loading'
    });
  }, 1000);
};

  const onFinish = (values) => {
      const updatedUsers = users.users.map(elem=>(user.id==elem.id ? {...elem, ...values} : elem))
    dispatch(editUser(updatedUsers));
    openMessage();
    setIsModalVisible(false);
  };


  return (
    <>
      <ButtonStyled onClick={showModal}>
        edit
      </ButtonStyled>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
      <StyledForm 
    form={form}
    name="nest-messages" 
    onFinish={onFinish} 
    validateMessages={validateMessages}
    initialValues={{
        ...user
        
    }}
    >

      <StyledFormItem
        name={'name'}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <StyledInput />

      </StyledFormItem>



      <StyledFormItem
        name={'surname'}
        label="surname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <StyledInput />

      </StyledFormItem>



      
      <StyledFormItem
        name={'email'}
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <StyledInput />
      </StyledFormItem>
      <StyledFormItem
        name={'age'}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 18,
          },
        ]}
      >
        <InputNumber />
      </StyledFormItem>

      <StyledFormItem label="are you merried?" name="merried"
       rules={[{ required: true, message: 'Please pick one' }]}
      >
        <Radio.Group>
          <Radio value="yes"> yes </Radio>
          <Radio value="no"> no </Radio>
        </Radio.Group>
      </StyledFormItem>


      <StyledFormItem name={'comment'} label="comment">
        <StyledInput.TextArea maxLength={100}/>
      </StyledFormItem>
      <StyledFormItem >



          <ButtonWrapper>
        <StyledButton  htmlType="submit">
          save
        </StyledButton>
        </ButtonWrapper>
      </StyledFormItem>

    </StyledForm>
      </Modal>
    </>
  );
};

export default EditModal;

const ButtonStyled = styled.button`
    outline:none;
    border:none;
    background-color:purple;
    color:white;
    margin:5px;
    border-radius:5px;
    padding:2px 6px;
    cursor:pointer;
`



//  form


const StyledForm = styled(Form)`

  max-width:600px;
  margin:auto;
  box-sizing:border-box;
  padding:20px;
`

const StyledFormItem = styled(Form.Item)`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
    & .ant-form-item-control{
        width:100%;
        text-align:left;
    }

`

const StyledInput = styled(Input)`
    width:100%;
`

const StyledButton = styled(Button)`
  & {
      background-color:green;
      color:white;
      margin-top:'20px !important';
      display:block;
      
      
  }
`

const ButtonWrapper = styled.div`
padding:10px 0;
`