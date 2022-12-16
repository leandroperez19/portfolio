import { useState } from "react"
import styled from "styled-components"
import { GlobalStyles } from "../assets/globalStyles"
import Link from "next/link";


export default function Navbar(){

  const [menuState,setMenuState] = useState<boolean | null>(null);

  return(
    <Wrapper>
      <GlobalStyles />
      <div className="content">
      <div className={`left burger ${menuState}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" onClick={()=>setMenuState(false)}>
          <g fill="#828FA3" fillRule="evenodd">
            <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/>
            <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/>
          </g>
        </svg>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/#projects'>Projects</Link></li>
          <li>Resume</li>
          <li><Link href='/#contact'>Contact</Link></li>
        </ul>
      </div>
      
      <div className="rigth">
        <span>EN</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" onClick={()=>setMenuState(true)}>
        <g fill="#7e8192" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
        </g>
      </svg>
      </div>
     {menuState && <div className="bg" onClick={()=>setMenuState(false)}></div>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 5em;
  background-color: #18181b;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3338;
  color: #fff;
  /* position: sticky; */
  /* position: relative; */
  .content{
    max-width: 1090px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0005;
  }
  svg{
    scale: .8;
    @media (min-width: 720px) {
      display: none;
    }
  }
  .left{
    @media (min-width: 720px) {
      width: 40%;
      max-width: 20em;
      ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
  .burger{
    @media (max-width:719px) {
      position: absolute;
      background-color: #37373a;
      color: #fff;
      top: 0;
      right: 0;
      width: 60vw;
      max-width: 20em;
      height: 100vh;
      z-index: 20;
      text-align: right;
      padding: 20px;
      z-index: 2;
      display: flex;
      align-items: flex-start;
      justify-content: right;
      &.null,&.false{
        display: none;
      }
      &.true{
        animation: sho .3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 normal forwards;
        @keyframes sho {
          0%{transform: scaleX(0);}
          100%{transform:scaleX(1);}
        }
      }
      
      svg{
        position: absolute;
        top: 32px;
        right: 20px;
        scale: 1.2;
      }
      ul{
        height: 15em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 80px;
      }
    }
  }
`