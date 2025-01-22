// src/components/layout/Section.jsx
import React from 'react';
 import { Container } from 'react-bootstrap'

 const Section = ({children, ...props }) => {
     return (
         <Container {...props} >
             {children}
         </Container>
     );
 };
 export default Section;