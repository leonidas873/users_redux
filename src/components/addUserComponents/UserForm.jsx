import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Checkbox, Radio, message  } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/users/UsersSlice';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';

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




const UserForm = () => {

  let id = uniqid();
const dispatch = useDispatch();
const navigate = useNavigate();
const [form] = Form.useForm();

const openMessage = () => {
  message.loading({
    content: 'Loading...',
    key:'loading'
  });
  setTimeout(() => {
    message.success({
      content: 'you have succesfully registered',
      duration: 2,
      key:'loading'
    });
  }, 1000);
};

  const onFinish = (values) => {
    dispatch(addUser(
      {
        id,
        ...values
      }
    ));
    openMessage();
    setTimeout(()=>{
      navigate("/users")
      form.resetFields()
    },1000)

    
  };


  return (
    <StyledForm 
    form={form}
    name="nest-messages" 
    onFinish={onFinish} 
    validateMessages={validateMessages}
    initialValues={{
        name:'',
        surname:'',
        email:'',
        age:null,
        terms:false,
        merried:null,
        comment:'',
        useInfo:false
        
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


      <StyledFormItem name={'useInfo'} valuePropName="checked" >
          <Checkbox rules={{
             required: true,
             
          }}>you can use my info</Checkbox>
        </StyledFormItem>



        <StyledFormItem
        name="terms"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </StyledFormItem>




          <ButtonWrapper>
        <StyledButton  htmlType="submit">
          register
        </StyledButton>
        </ButtonWrapper>
      </StyledFormItem>

    </StyledForm>
  );
};

export default UserForm;

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