import React from 'react';
import styled from 'styled-components';


const StyleWrapper = styled.div`
border-radius: 50%;
box-sizing: border-box;
width: ${props => props.size + 'px'};
height: ${props => props.size + 'px'};
padding: ${props => props.colorWidth + 'px'};
background: linear-gradient(to right, ${props => props.colors[0]}, ${props => props.colors[1]}) ;
&:hover {
  background: linear-gradient(to right, ${props => props.colors[1]}, ${props => props.colors[0]}) ;;
}
`
const StyledColoredUserpic = styled.div`
box-sizing: border-box;
padding: ${props => props.margin + 'px'};
background-color: ${props => props.backgroundColor} ;
border-radius: 50%;
width: 100%;
height: 100%;
`;

const StyledImg = styled.div`
width: 100%;
height: 100%;
border-radius: 50%;
background-image: url(${props => props.src});
`;

const ColoredUserpic = (props) => {
  return (
    <StyleWrapper {...props}>
      <StyledColoredUserpic {...props}>
        <StyledImg {...props} />
      </StyledColoredUserpic>
    </StyleWrapper>

  );
}

export default ColoredUserpic;
