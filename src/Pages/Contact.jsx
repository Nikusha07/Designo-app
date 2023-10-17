import React, { useState } from 'react';
import MainLayout from '../Components/layout/MainLayout';
import styled from 'styled-components';
import FormBackImg from '../images/FormBackgroundImg.png'
import { Button } from '../Components/styled';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('contactData', JSON.stringify(formData));

      alert('Your information has been saved.');
      setFormData({ name: '', email: '', message: '' });
    };
  return (
    <MainLayout>
        <ForumSection>
            <ContactUsDiv>
                <ContactUsInfo>
                    <h1>Contact Us</h1>
                    <span>Ready to take it to the next level? Let’s
                         talk about your project or idea and find
                        out how we can help your business grow. 
                        If you are looking for unique digital experiences that’s
                         relatable to your users, drop us a line.</span>
                </ContactUsInfo>
                <Form onSubmit={handleSubmit}>
                <Label>
                    Name:
                    <Inputs type="text" name="name" value={formData.name} onChange={handleChange} />
                </Label>
                <Label>
                    Email:
                    <Inputs type="email" name="email" value={formData.email} onChange={handleChange} />
                </Label>
                <LabelMessage>
                    Message:
                    <TextArea name="message" value={formData.message} onChange={handleChange} />
                </LabelMessage>
                <Button type="submit">Submit</Button>
                </Form>
            </ContactUsDiv>
        </ForumSection>
    </MainLayout>    
  );
}
const ForumSection = styled.section`
margin: 0 auto;
height: 50vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
margin-bottom: 50px;
`
const Form = styled.form`
    height: 480px;
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const LabelMessage = styled.label`
    float: right;
    min-width: 18px;
    font-size: 20px;
    text-transform: uppercase;
    color: #070707;
    margin-right: 15px;
`
const Label = styled.label`
      float: left;
    min-width: 17px;
    font-size: 20px;
    text-transform: uppercase;
    color: #62696d;
    margin-right: 15px;
`
const ContactUsDiv = styled.div`
    height: 480px;
    width: 1111px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-image: url(${FormBackImg});
`
const ContactUsInfo = styled.div`
    width: 500px;
`
const TextArea = styled.textarea`
    background: #fff;
    border: 1px solid #dae2e6;
    font-size: 15px;
    height: 60px;
    color: #62696d;
    padding: 6px 8px;
    box-shadow: none;
    border-radius: 0;
    line-height: normal;
    display: inline-block;
    width: 100%;
    margin-bottom: 0px;
`

const Inputs = styled.input`
    height: 30px;
    font-size: 20px;    
`
export default ContactForm;
