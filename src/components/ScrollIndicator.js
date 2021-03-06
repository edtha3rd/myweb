import React from 'react'
import styled from 'styled-components'
import scrollArrow from '../img/triple-scroll-arrow.svg'

const ArrowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

const ScrollArrow = styled.img`
  display: flex;
  flex: 0;
  height: 80px;
  justify-content: space-between;
  margin: 10px;
  text-align: center;
  width: 60px;
`

const ScrollIndicator = () => {
  return (
    <ArrowContainer>
      <ScrollArrow
        className="scroll-arrow"
        src={scrollArrow}
        alt="scroll-arrow"
      />
      <ScrollArrow
        className="scroll-arrow"
        src={scrollArrow}
        alt="scroll-arrow"
      />
    </ArrowContainer>
  )
}

export default ScrollIndicator
