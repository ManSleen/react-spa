import React from "react";
import styled from "styled-components"
const GuideCard = ({ guide, users }) => {
  const guideUserId = guide.guide_auth_id;

  const StyledCard = styled.div`
    width: 320px;
    height: 200px;
    margin:10px auto;
    background-color: #7EA85E; 
    display: flex;
    flex-flow: row nowrap;
   `
  const TextContent = styled.div`
    width: 60%
    display: flex;
    flex-flow: column nowrap;
  `
   const StyledSpan = styled.span `
    width: 90px;
    height: 90px;
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 20px;
   `

  const CircleImage = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;

`
  const AychFour = styled.h4 `
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    float: right;
    text-align: center;
  
  `
  const AychFourWrap = styled.div `
    width:90%;
    margin-top: 10px;
    margin-right:10px;
  `
  const PWrap = styled.div `
    width:100%;
    margin-top: 50px;
    height: 100px;
    margin-right: 20px;
  `
  const Para = styled.p `
    width:100%;
    margin-right: 20px;
    text-align: center;
    overflow-wrap: break-word;
  `
  return (

    <StyledCard>
      <StyledSpan>
        <CircleImage src={guide.banner_image ? guide.banner_image : null} />
      </StyledSpan>
      {/* <Card.Meta>{guide.created_at}</Card.Meta> */}
     
      <TextContent>
        <AychFourWrap>
          <AychFour>{guide.title}</AychFour>
       </AychFourWrap>
        <PWrap>
          <Para>Guide description goes here. drink some water. hydrating is important for all kinds of sandpaper eyeballs.</Para>
        </PWrap>
      </TextContent>
    </StyledCard>
  );
};

export default GuideCard;
