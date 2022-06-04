import styled from "styled-components"

export const sideBar = styled.div`
margin-top: 29px;
display: flex;
flex-direction: column;
position: fixed;
float: top;
width: 55px;
height: 100%;
padding: 0px 20px 15px 7.9px;
text-align: center;
`
export const sideBarItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 24px;
    margin: auto;
`
export const barItensContainer = styled.section`
    margin: auto;
    cursor: pointer;
  
    p {
        margin-top: 3px;
        font-size: 11px;
    }
    svg {
        height: 21px;
        width: 21px;
        transition: 0.3s;
    }
    svg:hover {
        background-color: rgb(200,200,200, 0.7);
        transition: padding 0.2s, transform 1.5s;
        padding: 9px;
        border-radius: 50%;
        transform: rotate(360deg)
    }
`
