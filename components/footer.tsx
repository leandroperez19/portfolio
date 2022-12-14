import styled from "styled-components";
import { BsWhatsapp,BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

export default function Footer(){
  return(
    <Wrapper>
      <div className="content">
      <div className="socials">
          <a href="https://wa.me/584245069396" target='_blank'>
            <BsWhatsapp className="whatsapp"/>
          </a>
          <a href="https://www.linkedin.com/in/leandro-perez-743a37211/" target='_blank'>
            <AiFillLinkedin className="linkedin" />
          </a>
          <a href="https://github.com/leandroperez19" target='_blank'>
            <AiFillGithub className="github" />
          </a>
          <a href="https://t.me/LeandroPerezDeveloper" target='_blank'>
            <BsTelegram className="telegram"/>
          </a>
      </div>
        <span>Leandro Perez, Front-end Developer</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 4em;
  display: flex;
  margin-top: 150px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 15px 0;
  background-color: #100e13;
  color: #fff;
  .content{
    width: 90%;
    margin: 0 auto;
    max-width: 1090px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .socials{
    width: 100%;
    max-width: 8em;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    svg{
      color: #Fff;
    }
    .linkedin{
      &:hover{
        color: #0977c0;
      }
    }
    .whatsapp{
      &:hover{
        color: #5ceb4f;
      }
    }
    .telegram{
      &:hover{
        color: #4faceb;
      }
    }
    .github{
      &:hover{
        color: #727272;
      }
    }
  }
  }
`