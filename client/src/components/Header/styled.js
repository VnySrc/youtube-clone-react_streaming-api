import styled, { createGlobalStyle } from "styled-components"

export const body = createGlobalStyle`
body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    color: black;
    font-family: "Roboto", "Noto", sans-serif;

}
`

export const mainContainer = styled.div` 
    width: 100%;
    height: 59px;
    position: fixed;
    z-index: 1;
    background-color: white;

`
export const navItems = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 20px;
    margin-left: 15px;
    margin-top: -10px;
    text-align: center;
    i {
        cursor: pointer;
    }
    h3 i {
        color: red;
        svg{
            width: 30px;
            height: 30px;
        }
    }
   
    svg {
    width: 25px;
    height: 25px;
    }
    input{
        margin-left: 175px;
        padding: 10px;
        width:519px;
        font-size: 13px;
        border: 1px solid rgb(200,200,200, 0.7);
        border-radius: 1px;
        outline: rgb(200,200,200, 1);
    }
    button {
        padding: 4px 20px;
        margin-left: -22px;
        align-items: center;
        text-align: center;
        border: 1px solid rgb(200,200,200, 0.7);
        cursor: pointer;
        svg{
            transform: translate(50, 100);
            width:15px;
            height: 15px;
            color: gray;
        }
        img {
            height: 20px;
            width: 20px;
        }
    }
        
`
export const logoName = styled.span`
margin-top: -200px;
margin-left: -15px;
transform: translateY(100px);
font-weight: bold;
font-size: 19px;
margin-right: -10px;
`
export const micImg = styled.i`
svg {
           width: 19px;
           height: 17px;
           margin-left: -5px;
           background-color: rgba(220,220,220, 0.3);
           padding: 10px;
           border-radius: 50%;
        }
`
export const navLinks = styled.ul` 
    display: flex;
    flex-direction: row;
    gap:25px;
    margin-right: 110px;
    li {
        list-style: none;
    }
    li img {
        width: 30px;
        border-radius: 16px;
        vertical-align: middle;
        border-style: none;
        margin-top: -10px;
    }
    button {
        font-size: 16px;
        color: white;
        background: linear-gradient(to left, #4F2280, #D4145A);
        padding: 10px 16px;
        border-radius: 5px;
        border: none;
        text-align: center;
        align-items: center;
        margin-top: -9px;
    }
`

export const userActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    align-items: center;
    margin-left: 150px;
    img {
            height: 33px;
            width: 33px;
            border-radius: 50%;
        }
   svg {
        height: 20px;
        width: 20px;
   }
`