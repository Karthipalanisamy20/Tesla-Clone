import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
<Wrap bgImage={backgroundImg}>
  <Fade bottom>
    <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
    </ItemText>
    </Fade>
    <Buttons>
      <Fade bottom>
        <ButtonGroup>
            <LeftButton>
              {leftBtnText}  
            </LeftButton>

            { 
            rightBtnText &&
             <RightButton>
             {rightBtnText}
             </RightButton>
           }
            </ButtonGroup>
          </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
    </Buttons>
</Wrap>
  )
}

export default Section;

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
backgrond-repeat:no-repeat;
// background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between; //vertical
align-items:center; //horizontal
background-image:${(props) => `url("/images/${props.bgImage}")`};
scroll-snap-align:start;
// z-index:1;
`
const ItemText =styled.div`
padding-top:15vh;
text-align:center;
// z-index:-1;
`;
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
gap:25px;
@media (max-width:768px)
{
  flex-direction:column;  
}
`

const LeftButton=styled.div`

font-size:12px;
cursor:pointer;
background-color:rgba(23,26,32,0.8);
border-radius:100px;
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
text-transform:uppercase;
// margin:10px;
position:relative;
top:17px;
font-weight:bold;
`
const RightButton=styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
`
const DownArrow = styled.img`
height:40px;
// overflow-x:hidden;
animation:animateDown infinite 1.5s;
`

const Buttons = styled.div`
  display:flex;
  flex-direction:column;

`
