import styled from "styled-components";

export const videosGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 100px);
margin: auto;
text-align: center;
`

export const categoriesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
z-index: 1;
background-color: white;
position: fixed;
align-items: center;
width: 100%;
height: 30px;
border-top: 1px solid rgba(1,1,1,0.1);
border-bottom: 1px solid rgba(1,1,1,0.1);
text-align: center;
padding: 11px 10px;
padding-right: 50px;
transform: translateY(59px);
margin-left: 70px;

`

export const categorieItem = styled.button`
padding: 7px  15px;
background-color: rgba(240,240,240,0.9);
border-radius: 15px;
border: none;
font-size: 14px;
margin-right: 65px;
margin-left: -43px;
border: 1px solid  rgba(1,1,1,0.2);;
transition: 0.5s;
background-color: rgba(${props => props.selected? "0,0,0.1" : "240,240,240,0.9"}) ;
color: ${props => props.selected? "white" : "black"};

:hover {
    background-color: rgba(1,1,1,0.3);
    transition: 0.5s;
}

`

export const GridContainerVideos = styled.div`
display: grid;
grid-template-columns: repeat(4, 297px);
grid-template-rows: 270px;
text-align: left;
justify-content: center;
gap: 13px;
width: 90%;
align-content: center;
transform: translate(95px,130px);

`
export const gridItemVideo = styled.div`
  
    img {
        width: 100%;
        transition: 0.7s;

        :hover {
            transform:scale(1.1);
            transition: 0.7s;
            cursor: pointer;
        }
    }
    span {
        font-size: 15px;
        color: gray;
        margin-left: 50px;
        margin-top: 10px;
    }
`
export const infoGrid = styled.section`
    display: flex;
    gap: 13px;
    text-align:  left;
    img {
            width: 36px;
            height: 36px;
            margin-top: 9px;
            object-fit: fill;
            border-radius: 50%;
        }         
        span {
        font-size: 13px;
        font-weight: bold;
        color: black;
        margin-left: 0px
    }
`