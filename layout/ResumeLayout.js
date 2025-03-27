import React from 'react'
import { Container2 } from './LayoutStyles';
import ResumeHeader from '../components/Header/ResumeHeader'
import ResumeFooter from '../components/Footer/ResumeFooter';

const ResumeLayout = ({children}) => {
  return (
    <Container2>
     <ResumeHeader/>
     <main>{children}</main> 
     <ResumeFooter/>
    </Container2>
  )
}

export default ResumeLayout