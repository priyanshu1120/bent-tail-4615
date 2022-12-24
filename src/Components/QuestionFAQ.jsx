import React from 'react'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
const QuestionFAQ = ({question,answer}) => {
  return (
    <div>
        <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
                  <Box flex='1' textAlign='left'>
                    {question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                  {answer}
              </AccordionPanel>
            </AccordionItem>
    </div>
  )
}

export default QuestionFAQ