import React from 'react'
import { Container } from './LayoutStyles';
import ResumeHeader from '../components/Header/ResumeHeader'
import ResumeFooter from '../components/Footer/ResumeFooter';

const ResumeLayout = ({children}) => {
  return (
    <Container>
     <ResumeHeader/>
     <main>{children}</main> 
     <ResumeFooter/>
    </Container>
  )
}

export default ResumeLayout