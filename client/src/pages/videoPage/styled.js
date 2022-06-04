import styled from "styled-components";

export const mainGrid = styled.div`
    display: grid;
    grid-template-columns: 63% 30%;
    grid-template-rows: 100px;
    justify-content: center;
    column-gap: 25px;
    font-family: "Roboto", "Noto", sans-serif;

`
export const sideVideoList = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`
export const categoriesContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
transform: translate(0, 100px);
margin-bottom: -20px;
margin-left: 0px;
margin-top: -10px;
button{
    font-size: 14px;
    padding: 7px  15px;
    border-radius: 17px;
    border: none;
    border: 1px solid  rgba(1,1,1,0.2);
}
`
export const categorieItem = styled.button`
transition: 0.5s;
background-color: rgba(${props => props.selected? "0,0,0.1" : "240,240,240,0.9"}) ;
color: ${props => props.selected? "white" : "black"};

`
export const videoContainerGrid = styled.div`
width: 100%;
height: 100vh;
`
export const videoContainer = styled.div`
    transform: translate(0, 79px);
`

export const videoTitle = styled.p`
font-size: 19px;
margin: 7px 0px;
line-height: 2.6rem;
font-weight: 400;
`

export const videoInfoActions = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
i {
    font-weight: bold;
    font-size: 22px;
    transform: translate(10px, -10px);
}
svg {
    cursor: pointer;
    transition: 0.3s;
    :hover {
        transition: 0.7s;
        transform: scale(1.5);
        text-shadow: 1px 1px 3px black;
    }
}
`
export const videoDescriptionContainer = styled.div`

`

export const channelDescription = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
gap: 5px;
font-size: 15px;
font-weight: 550;
margin-top: 9px;
padding-top: -5px;
border-top: 1px solid rgba(0,0,0,0.1);

img {
    width: 48px;
    object-fit: fill;
    border-radius: 50%;
    transform: translateY(20px);
    margin-right: 10px;
    cursor: pointer;
}
button {
    transform: translateY(20px);
    background-color: #A52A2A;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 17px;
    font-size: 17px;
    font-weight: 400px;
    filter: contrast(5.88);
    cursor: pointer;
    transition: 0.3s;
    :hover {
        padding: 11px 18px;
        transition: 0.3s;
        box-shadow: 3px 3px 11px black;
    }
}
`
export const showMoreDescription = styled.section`
display: block;
transform: translate(60px ,25px);
width: 100%;
p {
    margin-left: 10px;
    margin-bottom: 25px;

}
a{ 
    text-decoration: none;
    padding-right: 10px;

}
border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const videoComents = styled.div `
transform: translate(270px, 55px);

a {
    text-decoration: none;
}
`

export const itemList = styled.div`
display: grid;
grid-template-columns: 40% 55%;
grid-template-rows: 103px;
column-gap: 10px;
transform: translateY(139px);
`

export const itemImg = styled.section`
width: 100%;
img {
    width: 168px;
    height: 94px;
    transition: 0.3s;
    :hover {
        transform: scale(1.03);
        transition: 0.3s;
        box-shadow: 3px 3px 9px black;

        
    }
}
`
export const itemInfo = styled.section` 
width: 100%;

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
            margin-left: 0px
    }
`

export const itemStatus =styled.div`

span {
    font-size: 11px;
    color: gray;
    text-align: end;
}
`