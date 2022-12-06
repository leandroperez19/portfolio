import Next from '../assets/Next.png';
import ReactJs from '../assets/React.png';
import Gatsby from '../assets/Gatsby.png';
import Javascript from '../assets/Javascript.png';
import Typescript from '../assets/Typescript.svg';
import Html from '../assets/Html.svg';
import Workbox from '../assets/Workbox.svg';
import Sass from '../assets/Sass.png';
import Vue from '../assets/Vue.png';
import Tailwind from '../assets/Tailwind.png';
import Css from '../assets/Css.png';
import Firebase from '../assets/Firebase.png';
import Analytics from '../assets/Analytics.png';
import Redux from '../assets/Redux.png';
import Image from 'next/image'
import styled from 'styled-components';

export default function Techs(){
  return(
    <Wrapper className="techs">
      <div className="Html tech">
        <Image src={Html} alt='Html' title='Html' height={80} width={100} />
      </div>
      <div className="Css tech">
        <Image src={Css} alt='Css' title='Css' height={80} width={100} />
      </div>
      <div className="Javascript tech">
        <Image src={Javascript} alt='Javascript' title='Javascript' height={80} width={100} className='js' />
      </div>
      <div className="Typescript tech">
        <Image src={Typescript} alt='Typescript' title='Typescript' height={80} width={100} className='ts' />
      </div>
      <div className="React tech">
        <Image src={ReactJs} alt='ReactJs' title='ReactJs' height={80} width={100} />
      </div>
      <div className="Vue tech">
        <Image src={Vue} alt='Vue' title='Vue' height={80} width={100} />
      </div>
      <div className="Gatsby tech">
        <Image src={Gatsby} alt='Gatsby' title='Gatsby' height={80} width={100} />
      </div>
      <div className="Next tech">
        <Image src={Next} alt='Next' title='Next' height={80} width={100} />
      </div>
      <div className="Sass tech">
        <Image src={Sass} alt='Sass' title='Sass' height={80} width={100} />
      </div>
      <div className="Tailwind tech">
        <Image src={Tailwind} alt='Tailwind' title='Tailwind' height={80} width={100} />
      </div>
      <div className="Firebase tech">
        <Image src={Firebase} alt='Firebase' title='Firebase' height={80} width={100} />
      </div>
      <div className="Analytics tech">
        <Image src={Analytics} alt='Analytics' title='Analytics' height={80} width={100} />
      </div>
      <div className="Workbox tech">
        <Image src={Workbox} alt='Workbox' title='Workbox' height={80} width={100} />
      </div>
      <div className="Redux tech">
        <Image src={Redux} alt='Redux' title='Redux' height={80} width={100} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-direction: column; */
  flex-wrap: wrap;
  margin-top: 20px;
  overflow: hidden;
  .tech{
    &.Javascript{background-color: #f7e018;}
    &.Typescript{background-color: #017acb;}
    width: 40%;
    text-align: center;
    margin: 8px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    &:nth-child(2n){
      transform: translateX(100%);
      animation: show .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards;
      @keyframes show {
      100%{transform:translateX(0%);}
      }
    }
    &:nth-child(3n){
      transform: translateX(-100%);
      animation: show .4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards;
      @keyframes show {
      100%{transform:translateX(0%);}
      }
    }
    img{
      margin: 5px;
    }
  }
`