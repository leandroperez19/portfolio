import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { useLang } from "../context/langContext";

interface Props{
  img : StaticImageData,
  name : string,
  subt : string,
  description : string,
  techs : StaticImageData[],
  repo : string,
  demo : string
}

export default function ProjectCard({img,name,subt,description,techs,repo,demo} : Props){

  const goTo = (href:string)=>window.open(href,'_blank');
  const {language} = useLang();

  return(
    <Wrapper>
      <Image src={img} alt='project' width={200} height={200} className='project-img'/>
      <div className="project-info">
        <h2>{name}</h2>
        <span>{subt}</span>
        <p>{description}</p>
      </div>
      <div className="techs-used">
        {techs.map((tech)=>(
          <Image src={tech} alt='tech' width={20} height={20}/>
        ))}
      </div>
      <div className="btns">
        <button onClick={()=>goTo(repo)}>{language.cardsCodeBtn}</button>
        <button onClick={()=>goTo(demo)}>Demo</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #0007;
  position: relative;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 15px 0;
  max-width: 280px;
  transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-width:425px) {
    width: 100%;
    max-width: 410px;
  }
  &:hover > .btns{
    bottom: 0;
  }
  .project-img{
    width: 100%;
  }
  .project-info{
    text-align: left;
    margin: 10px;
    h2{
      font-size: 18px;
      font-weight: 400;
    }
    span{
      font-size: 14px;
      font-weight: 300;
    }
    p{
      margin-top: 10px;
      font-size: 14px;
      color: #99a4ac;
      max-height: 85px;
      min-height: 85px;
      max-width: 100%;
      text-overflow: clip;
    }
  }
  .techs-used{
    display: flex;
    justify-content: right;
    background-color: #303131;
    padding: 6px;
    margin-top: 20px;
    img{
      margin-right: 8px;
    }
  }
  .btns{
    position: absolute;
    bottom: -100%;
    background-color: #000;
    height: 100%;
    width: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;
    cursor: default;
    button{
      width: 80%;
      padding: 10px;
      margin: 5px;
      font-size: 16px;
      border: none;
      outline: none;
      font-weight: 600;
      background-color: #3e4a64;
      color: #fff;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: background-color .3s cubic-bezier(0.165, 0.84, 0.44, 1);
      &:hover{
        background-color: #273452;
      }
    }
  }
`