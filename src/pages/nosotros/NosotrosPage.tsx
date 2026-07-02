import svgPaths from "./svgPaths";
import { ASSETS } from "@/config/assets";

const imgRectangle114 = ASSETS.logo;
const imgHero = ASSETS.nosotros.hero;
const imgRectangle145 = ASSETS.nosotros.story01;
const imgContainer = ASSETS.nosotros.story02;
const imgContainer1 = ASSETS.nosotros.story03;
const imgContainer2 = ASSETS.nosotros.story04;
const imgContainer3 = ASSETS.nosotros.story05;
const imgContainer4 = ASSETS.nosotros.story06;
const imgImageChaquetaCapucha = ASSETS.products.hoodedBrownJacket;
const imgImageAbrigoCorto = ASSETS.products.shortBrownCoat;
const imgImageHoodieFleece = ASSETS.products.gildanHeavyCottonShirt;
const imgImageSweaterCuello = ASSETS.products.turtleneckSweater;

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[192px]">
      <div className="h-[69px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.2%] max-w-none top-0 w-[99.59%]" src={imgRectangle114} />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
      <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[34px]">Contactos</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Ofertas</p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0">
        <Frame11 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0">
      <a className="bg-white content-stretch cursor-pointer flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Inicio</p>
        </div>
      </a>
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Nosotros</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Categorías</p>
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame15 />
    </div>
  );
}

function LucideSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/search">
          <path d={svgPaths.p1cbce280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0">
      <LucideSearch />
      <div className="[word-break:break-word] flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#9b9b9b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[34px]">Buscar productos</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex flex-col h-[48px] items-start pl-[20px] pr-[418px] py-[7px] relative rounded-[20px] shrink-0 w-[581px]">
      <Frame />
    </div>
  );
}

function LucideHeart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/heart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/heart">
          <path d={svgPaths.p3f86cd40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/shopping-cart">
          <path d={svgPaths.p5f59f70} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideUserRound() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/user-round">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/user-round">
          <path d={svgPaths.pea1e2e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[59px] items-center relative shrink-0">
      <LucideHeart />
      <LucideShoppingCart />
      <LucideUserRound />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[84px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[581px]">
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[877px]">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[55px] h-[68px] items-center relative shrink-0 w-[1884px]">
      <Frame6 />
      <Frame9 />
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[1884px]">
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[1921px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[37px] relative size-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-shadow-[0px_4px_8.3px_rgba(0,0,0,0.25)] text-white tracking-[-2px] w-full">
          <span className="font-['Jost:Medium',sans-serif] font-medium leading-[88.32px] text-[96px]">{`Conoce a `}</span>
          <span className="font-['Jost:Medium',sans-serif] font-medium leading-[88.32px] text-[96px] text-black">Mundo Polar</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="max-w-[580px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[35px] not-italic relative shrink-0 text-[24px] text-shadow-[0px_4px_7.8px_rgba(0,0,0,0.25)] text-white w-[703px]">Somos Mundo Polar — una tienda de ropa de invierno para toda la familia. Diseño, calidez y materiales sostenibles en cada prenda.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#004ac6] h-[59px] relative shrink-0 w-[228px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[40px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">
          <span className="font-['Inter:Black',sans-serif] font-black leading-[21px]">Ver colección</span>
          <span className="leading-[21px]">{` `}</span>
        </p>
        <Icon />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-3 border-[rgba(255,255,255,0.81)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[43px] py-[19px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">
          <span className="font-['Inter:Black',sans-serif] font-black leading-[21px]">Nuestra</span>
          <span className="leading-[21px]">{` historia`}</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center pt-[8px] relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[780px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Heading />
        <Paragraph />
        <Container1 />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[758px] relative shrink-0 w-full" data-name="Hero">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[166.9%] left-0 max-w-none top-[-43.15%] w-full" src={imgHero} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[141px] py-[187px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative shrink-0 w-[1920px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Hero />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[758px] relative shrink-0 w-[1920px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <App />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#141b2b] text-[58px] tracking-[-1px] whitespace-nowrap">
          <p className="leading-[59.74px] mb-0">Más que una</p>
          <p className="leading-[59.74px]">tienda de ropa.</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#004ac6] h-[2px] relative shrink-0 w-[44px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[34.65px] not-italic relative shrink-0 text-[#434655] text-[21px] w-[760px]">En Mundo Polar creemos que el invierno es una temporada para disfrutar en familia, sin dejar de lado el estilo y la comodidad.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[31.45px] not-italic relative shrink-0 text-[#717182] text-[17px] w-[760px]">Desde nuestros inicios nos hemos dedicado a ofrecer prendas de alta calidad que combinan diseño minimalista, máxima calidez y durabilidad. Nuestro compromiso: mantener a toda tu familia abrigada —incluyendo mascotas— con materiales sostenibles y procesos de fabricación éticos.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[36.8px] py-[14.8px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[#0a0a0a] text-[13px] text-center tracking-[1.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>{`Conoce más `}</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[750px] items-start justify-center left-[960px] px-[100px] top-0 w-[960px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Paragraph1 />
      <Paragraph2 />
      <Button2 />
    </div>
  );
}

function QuienesSomos() {
  return (
    <div className="bg-[#f5f5f5] h-[750px] relative shrink-0 w-full" data-name="QuienesSomos">
      <Container2 />
      <div className="absolute h-[688px] left-0 top-[62px] w-[960px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle145} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004ac6] text-[12px] tracking-[3.5px] uppercase whitespace-nowrap">Nuestra propuesta de valor</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[58px] text-white tracking-[-1px] whitespace-nowrap">
          <p className="leading-[59.74px] mb-0">¿Por qué</p>
          <p className="leading-[59.74px]">elegirnos?</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text />
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="max-w-[460px] relative shrink-0 w-[460px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32.4px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.5)] text-right w-[460px]">Somos más que una tienda. Somos el abrigo de tu familia en los meses más fríos del año.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,74,198,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[40px] text-[rgba(255,255,255,0.05)] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container10 />
        <Text1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Calidad garantizada</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-[309px]">Cada prenda pasa controles estrictos antes de llegar a tus manos. Durabilidad y resistencia al frío, temporada tras temporada.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[179px] relative shrink-0 w-[308.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative size-full">
        <Heading3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[40.8px] pt-[36.8px] px-[36.8px] top-0 w-[382px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3dc17b80} id="Vector" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.pca10000} id="Vector_2" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,74,198,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[40px] text-[rgba(255,255,255,0.05)] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container14 />
        <Text2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Materiales eco-amigables</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-[309px]">Lana reciclada, algodón orgánico y fleece de botellas PET. Sin comprometer el planeta ni el confort.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[152.75px] relative shrink-0 w-[308.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative size-full">
        <Heading4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[308.6px] items-start justify-between left-[406px] pb-[40.8px] pt-[36.8px] px-[36.8px] top-0 w-[382px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,74,198,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[40px] text-[rgba(255,255,255,0.05)] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container18 />
        <Text3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Para toda la familia</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-[309px]">Mujer, hombre, niños y mascotas. Una sola tienda para que todos estén abrigados con estilo.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[152.75px] relative shrink-0 w-[308.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative size-full">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[308.6px] items-start justify-between left-[812px] pb-[40.8px] pt-[36.8px] px-[36.8px] top-0 w-[382px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67fd620} id="Vector" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M15 18H9" id="Vector_2" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p2beec100} id="Vector_3" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p13934880} id="Vector_4" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p1ff3c700} id="Vector_5" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,74,198,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[40px] text-[rgba(255,255,255,0.05)] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container22 />
        <Text4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white whitespace-nowrap">Envío rápido y seguro</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26.25px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-[309px]">Despacho a todo el país en 24–72 hrs. Seguimiento en tiempo real incluido en cada pedido.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[152.75px] relative shrink-0 w-[308.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[32px] relative size-full">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[308.6px] items-start justify-between left-[1218px] pb-[40.8px] pt-[36.8px] px-[36.8px] top-0 w-[382px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[308.6px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
        <Container12 />
        <Container16 />
        <Container20 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[42px] text-white whitespace-nowrap">+1,200</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#141b2b] content-stretch flex flex-col gap-[8px] items-center justify-center left-[0.8px] py-[28px] top-[0.8px] w-[398.85px]" data-name="Container">
      <Text5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase whitespace-nowrap">clientes satisfechos</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[42px] text-white whitespace-nowrap">80%</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#141b2b] content-stretch flex flex-col gap-[8px] items-center justify-center left-[400.65px] py-[28px] top-[0.8px] w-[398.85px]" data-name="Container">
      <Text6 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase whitespace-nowrap">materiales reciclados</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[42px] text-white whitespace-nowrap">24h</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#141b2b] content-stretch flex flex-col gap-[8px] items-center justify-center left-[800.5px] py-[28px] top-[0.8px] w-[398.85px]" data-name="Container">
      <Text7 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase whitespace-nowrap">tiempo de envío</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[42px] relative shrink-0 text-[42px] text-white whitespace-nowrap">4.9★</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#141b2b] content-stretch flex flex-col gap-[8px] items-center justify-center left-[1200.35px] py-[28px] top-[0.8px] w-[398.85px]" data-name="Container">
      <Text8 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase whitespace-nowrap">valoración promedio</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] h-[127.1px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function PorQueElegirnos() {
  return (
    <div className="bg-[#141b2b] h-[790px] relative shrink-0 w-full" data-name="PorQueElegirnos">
      <div className="content-stretch flex flex-col items-start justify-between px-[160px] py-[80px] relative size-full">
        <Container5 />
        <Container7 />
        <Container24 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#141b2b] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
          <p className="leading-[64px] mb-0">Lo que nos mueve</p>
          <p className="leading-[64px]">cada día.</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="max-w-[760px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-center max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004ac6] text-[12px] text-center tracking-[3.5px] uppercase whitespace-nowrap">Misión y valores</p>
        <Heading7 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32.4px] not-italic relative shrink-0 text-[#717182] text-[18px] text-center w-[760px]">Mundo Polar nació con una misión clara: que ninguna familia pase frío — y que hacerlo bien no signifique descuidar el planeta.</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p12177900} id="Vector" stroke="var(--stroke-0, #C0392B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#fde8e8] relative shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#c0392b] text-[12px] tracking-[3px] uppercase whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#141b2b] text-[26px] whitespace-nowrap">Familia primero</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.675px] not-italic relative shrink-0 text-[#717182] text-[15.5px] w-[311px]">Cada decisión que tomamos parte de una sola pregunta: ¿le hace bien a las familias que nos eligen? El bienestar de las tuyas guía todo lo que hacemos.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text9 />
        <Heading8 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[435.1px] items-start left-[0.8px] pl-[44px] pr-[44.8px] py-[48px] top-[0.8px] w-[399.6px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.07)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p73ea900} id="Vector" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M30 4.5V10.5" id="Vector_2" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M33 7.5H27" id="Vector_3" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M6 25.5V28.5" id="Vector_4" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M7.5 27H4.5" id="Vector_5" stroke="var(--stroke-0, #004AC6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#e6eeff] relative shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004ac6] text-[12px] tracking-[3px] uppercase whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#141b2b] text-[26px] whitespace-nowrap">Diseño con propósito</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.675px] not-italic relative shrink-0 text-[#717182] text-[15.5px] w-[311px]">No seguimos tendencias a ciegas. Diseñamos prendas que duran, que combinan y que se sienten bien — temporada tras temporada.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text10 />
        <Heading9 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[435.1px] items-start left-[400.4px] pl-[44px] pr-[44.8px] py-[48px] top-[0.8px] w-[399.6px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.07)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #2D7A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d={svgPaths.pc960100} id="Vector_2" stroke="var(--stroke-0, #2D7A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M3 18H33" id="Vector_3" stroke="var(--stroke-0, #2D7A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#e8f4e8] relative shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[3px] uppercase whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#141b2b] text-[26px] w-[311px]">Responsabilidad ambiental</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.675px] not-italic relative shrink-0 text-[#717182] text-[15.5px] w-[311px]">Fabricar ropa tiene un impacto. Por eso elegimos materiales reciclados, procesos éticos y empaques sin plástico. El planeta también importa.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text11 />
        <Heading10 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[800px] pl-[44px] pr-[44.8px] py-[48px] top-[0.8px] w-[399.6px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.07)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p37ee880} id="Vector" stroke="var(--stroke-0, #B07D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          <path d="M13.5 18L16.5 21L22.5 15" id="Vector_2" stroke="var(--stroke-0, #B07D00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#fff8e6] relative shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#b07d00] text-[12px] tracking-[3px] uppercase whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#141b2b] text-[26px] whitespace-nowrap">Calidad sin concesiones</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.675px] not-italic relative shrink-0 text-[#717182] text-[15.5px] w-[312px]">Controlamos cada costura, cada tela y cada cierre. Si no lo usaríamos nosotros, no lo vendemos. Así de simple.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Text12 />
        <Heading11 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[435.1px] items-start left-[1199.6px] px-[44px] py-[48px] top-[0.8px] w-[399.6px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[436.7px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
        <Container34 />
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="max-w-[700px] relative shrink-0 w-[700px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[47.5px] relative shrink-0 text-[38px] text-white tracking-[-0.5px] w-[700px]">{`"Nuestra misión es que cada prenda que vendemos sea una razón para disfrutar el invierno."`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return <div className="bg-[#004ac6] h-[2px] relative shrink-0 w-[48px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px] text-white whitespace-nowrap">Mundo Polar</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Fundado en 2019 · Santiago, Chile</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container45 />
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#141b2b] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[80px] py-[56px] relative size-full">
          <Paragraph12 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function MisionValores() {
  return (
    <div className="bg-white h-[1033px] relative shrink-0 w-full" data-name="MisionValores">
      <div className="content-stretch flex flex-col items-start justify-between px-[160px] py-[90px] relative size-full">
        <Container29 />
        <Container30 />
        <Container43 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p93fc9f0} id="Vector" stroke="var(--stroke-0, #2D7A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36e9fb40} id="Vector_2" stroke="var(--stroke-0, #2D7A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[3.5px] uppercase whitespace-nowrap">Compromiso ambiental</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon10 />
        <Text15 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#141b2b] text-[58px] tracking-[-1px] whitespace-nowrap">
          <p className="leading-[59.74px] mb-0">Materiales</p>
          <p className="leading-[59.74px]">eco-amigables.</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container48 />
        <Heading12 />
      </div>
    </div>
  );
}

function Container49() {
  return <div className="bg-[#2d7a2d] h-[2px] relative shrink-0 w-[44px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[31.45px] not-italic relative shrink-0 text-[#717182] text-[17px] w-[720px]">El planeta es nuestra casa. Seleccionamos cada material con conciencia para que tu familia esté abrigada sin comprometer el futuro.</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Lana reciclada</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#e8f4e8] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[0.3px] whitespace-nowrap">100% reciclada</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Container54() {
  return <div className="bg-[#2d7a2d] h-[3px] relative rounded-[2px] shrink-0 w-[576px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] h-[3px] relative rounded-[2px] shrink-0 w-[720px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Algodón orgánico</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#e8f4e8] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[0.3px] whitespace-nowrap">Sin pesticidas</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function Container58() {
  return <div className="bg-[#2d7a2d] h-[3px] relative rounded-[2px] shrink-0 w-[468px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] h-[3px] relative rounded-[2px] shrink-0 w-[720px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Fleece sostenible</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#e8f4e8] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[0.3px] whitespace-nowrap">Botellas recicladas</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Container62() {
  return <div className="bg-[#2d7a2d] h-[3px] relative rounded-[2px] shrink-0 w-[648px]" data-name="Container" />;
}

function Container61() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] h-[3px] relative rounded-[2px] shrink-0 w-[720px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Empaques verdes</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="bg-[#e8f4e8] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[10px] py-[3px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#2d7a2d] text-[12px] tracking-[0.3px] whitespace-nowrap">0 plástico</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Container66() {
  return <div className="bg-[#2d7a2d] h-[3px] relative rounded-[2px] shrink-0 w-full" data-name="Container" />;
}

function Container65() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] h-[3px] relative rounded-[2px] shrink-0 w-[720px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Container51 />
        <Container55 />
        <Container59 />
        <Container63 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#004ac6] text-[36px] whitespace-nowrap">−40%</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.2px] not-italic relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">Huella de carbono</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-[24.8px] w-[224px]" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#004ac6] text-[36px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.2px] not-italic relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">Meta carbono neutro</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[248px] top-[24.8px] w-[224px]" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#004ac6] text-[36px] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.2px] not-italic relative shrink-0 text-[#717182] text-[13px] whitespace-nowrap">Plástico en empaques</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[496px] top-[24.8px] w-[224px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[83px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container68 />
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] h-[730px] items-start justify-center left-0 px-[120px] top-0 w-[960px]" data-name="Container">
      <Container47 />
      <Container49 />
      <Paragraph13 />
      <Container50 />
      <Container67 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[730px] left-[960px] top-0 w-[960px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[126.33%] left-[0.02%] max-w-none top-[-13.14%] w-full" src={imgContainer} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(142.75deg, rgba(20, 27, 43, 0.42) 0%, rgba(0, 0, 0, 0) 60%)" }} />
      </div>
    </div>
  );
}

function EcoMateriales() {
  return (
    <div className="bg-[#f5f5f5] h-[730px] relative shrink-0 w-full" data-name="EcoMateriales">
      <Container46 />
      <Container71 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[59.74px] relative shrink-0 text-[#141b2b] text-[58px] text-center tracking-[-1px] whitespace-nowrap">Lo que dice nuestra comunidad.</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[#141b2b] text-[72px] text-center whitespace-nowrap">4.9</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="relative shrink-0" data-name="Stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Icon11 />
        <Icon12 />
        <Icon13 />
        <Icon14 />
        <Icon15 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Stars />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#717182] text-[14px] text-center whitespace-nowrap">+1,200 reseñas verificadas</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[80px] relative shrink-0 w-[324px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center pt-[8px] relative size-full">
        <Text30 />
        <Container74 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004ac6] text-[12px] text-center tracking-[3.5px] uppercase whitespace-nowrap">Valoración de clientes</p>
        <Heading13 />
        <Container73 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Stars1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-start left-[21.2px] top-[188.2px]" data-name="Stars">
      <Icon16 />
      <Icon17 />
      <Icon18 />
      <Icon19 />
      <Icon20 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[155.66%] left-[-0.02%] max-w-none top-[-43.68%] w-full" src={imgContainer1} />
        </div>
        <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Stars1 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="flex-[86.4_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] not-italic relative shrink-0 text-[#434655] text-[16px] w-[450px]">{`"La chaqueta que compré para mi mascota es increíble. Súper abrigadora y el material se siente premium. Lo mejor: saber que es fabricada con lana reciclada."`}</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">V</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#004ac6] relative rounded-[26843500px] shrink-0 size-[42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text31 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Valentina R.</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] whitespace-nowrap">Santiago, Chile</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-[85.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="max-w-[120px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] text-right whitespace-nowrap">Chaqueta mascota</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[20.8px] relative size-full">
        <Container80 />
        <Text32 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white flex-[229.2_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[28px] pt-[32px] px-[32px] relative size-full">
        <Paragraph14 />
        <Container79 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[450.8px] left-0 top-0 w-[514.663px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container77 />
        <Container78 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Stars2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-start left-[24px] top-[186px]" data-name="Stars">
      <Icon21 />
      <Icon22 />
      <Icon23 />
      <Icon24 />
      <Icon25 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[155.49%] left-[-0.17%] max-w-none top-[0.26%] w-full" src={imgContainer2} />
        </div>
        <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Stars2 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="flex-[86.4_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] not-italic relative shrink-0 text-[#434655] text-[16px] w-[450px]">{`"Llevo dos inviernos usando mi abrigo de Mundo Polar. No se ha deformado ni perdido color. La calidad es notablemente superior a otras tiendas del mismo precio."`}</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#004ac6] relative rounded-[26843500px] shrink-0 size-[42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text33 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Marcos T.</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] whitespace-nowrap">Mendoza, Argentina</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-[114.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container88 />
        <Container89 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="max-w-[120px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] text-right whitespace-nowrap">Abrigo mujer</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[20.8px] relative size-full">
        <Container87 />
        <Text34 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-white flex-[229.2_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[28px] pt-[32px] px-[32px] relative size-full">
        <Paragraph17 />
        <Container86 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[450.8px] left-[542.66px] top-0 w-[514.663px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container84 />
        <Container85 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #FFAB00)" id="Vector" stroke="var(--stroke-0, #FFAB00)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Stars3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-start left-[24px] top-[186px]" data-name="Stars">
      <Icon26 />
      <Icon27 />
      <Icon28 />
      <Icon29 />
      <Icon30 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[155.49%] left-[0.02%] max-w-none top-[-0.09%] w-full" src={imgContainer3} />
        </div>
        <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.5)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Stars3 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="flex-[86.4_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] not-italic relative shrink-0 text-[#434655] text-[16px] w-[450px]">{`"Me encantó que el empaque llegó sin plástico y con una tarjeta explicando de dónde viene el material. Pequeños detalles que marcan la diferencia."`}</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">C</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#004ac6] relative rounded-[26843500px] shrink-0 size-[42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[#141b2b] text-[15px] whitespace-nowrap">Carla M.</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] whitespace-nowrap">Lima, Perú</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-[59.987px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="max-w-[120px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] text-right whitespace-nowrap">Sweater orgánico</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.06)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[20.8px] relative size-full">
        <Container94 />
        <Text36 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-white flex-[229.2_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[28px] pt-[32px] px-[32px] relative size-full">
        <Paragraph20 />
        <Container93 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[450.8px] left-[1085.33px] top-0 w-[514.663px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container91 />
        <Container92 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[450.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container76 />
        <Container83 />
        <Container90 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[48.8px] py-[16.8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] text-center tracking-[0.6px] uppercase whitespace-nowrap">{`Ver todas las reseñas `}</p>
          <Icon31 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[53.6px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[29px] h-[903px] items-start px-[160px] py-[90px] relative shrink-0 w-[1920px]" data-name="Reviews">
      <Container72 />
      <Container75 />
      <Container97 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[4451px] relative shrink-0 w-[1920px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[35px] items-start pt-[35px] relative size-full">
        <QuienesSomos />
        <PorQueElegirnos />
        <MisionValores />
        <EcoMateriales />
        <Reviews />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004ac6] text-[12px] tracking-[3.5px] uppercase whitespace-nowrap">Contáctanos</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#141b2b] text-[58px] tracking-[-1px] whitespace-nowrap">
          <p className="leading-[59.74px] mb-0">Estamos para</p>
          <p className="leading-[59.74px]">ayudarte.</p>
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Text37 />
        <Heading14 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container99 />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Nombre</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[52.1px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[16.8px] py-[14.8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9b9b9b] text-[15px] w-full">Tu nombre</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-0 top-0 w-[396.375px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white h-[52.1px] relative shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[16.8px] py-[14.8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9b9b9b] text-[15px] w-full">tu@email.com</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[412.38px] top-0 w-[396.375px]" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[76.1px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container102 />
        <Container103 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Asunto</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[52.1px] relative shrink-0 w-[808.75px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[16.8px] py-[14.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9b9b9b] text-[15px] w-full">¿En qué te ayudamos?</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label2 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Mensaje</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[142.1px] relative shrink-0 w-[808.75px]" data-name="Text Area">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[16.8px] py-[14.8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#9b9b9b] text-[15px] w-full">Cuéntanos cómo podemos ayudarte…</p>
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label3 />
        <TextArea />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3726)" id="Icon">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_3726">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#004ac6] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[36px] py-[15px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">{`Enviar mensaje `}</p>
        <Icon32 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-0 w-[808.75px]" data-name="Form">
      <Container101 />
      <Container104 />
      <Container105 />
      <Button4 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-white whitespace-nowrap">¿Buscas algo especial?</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[27px] relative shrink-0 w-[289.087px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">Escríbenos y te ayudamos a encontrarlo.</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] top-[173.5px] w-[289.087px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[188.55%] left-[-0.05%] max-w-none top-[-0.02%] w-full" src={imgContainer4} />
        </div>
        <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.6)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container108 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#9b9b9b] text-[11px] tracking-[3px] uppercase whitespace-nowrap">Productos populares</p>
      </div>
    </div>
  );
}

function PlaceholderForContacto() {
  return <div className="h-[229.075px] relative shrink-0 w-[171.813px]" data-name="Placeholder for Contacto" />;
}

function Paragraph26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[16.9px] relative shrink-0 text-[#141b2b] text-[13px] whitespace-nowrap">Chaqueta capucha</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[23px] relative shrink-0 w-[171.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#004ac6] text-[14px] whitespace-nowrap">$50</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Paragraph26 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function ImageChaquetaCapucha() {
  return (
    <div className="absolute h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Image (Chaqueta capucha)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChaquetaCapucha} />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute bg-[#efefef] h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageChaquetaCapucha />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[171.813px]" data-name="Container">
      <PlaceholderForContacto />
      <Container112 />
      <Container113 />
    </div>
  );
}

function PlaceholderForContacto1() {
  return <div className="h-[229.075px] relative shrink-0 w-[171.813px]" data-name="Placeholder for Contacto" />;
}

function Paragraph28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[16.9px] relative shrink-0 text-[#141b2b] text-[13px] whitespace-nowrap">Abrigo corto</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[23px] relative shrink-0 w-[171.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#004ac6] text-[14px] whitespace-nowrap">$500</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function ImageAbrigoCorto() {
  return (
    <div className="absolute h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Image (Abrigo corto)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAbrigoCorto} />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-[#efefef] h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageAbrigoCorto />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[187.81px] top-0 w-[171.813px]" data-name="Container">
      <PlaceholderForContacto1 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function PlaceholderForContacto2() {
  return <div className="h-[229.075px] relative shrink-0 w-[171.813px]" data-name="Placeholder for Contacto" />;
}

function Paragraph30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[16.9px] relative shrink-0 text-[#141b2b] text-[13px] whitespace-nowrap">Hoodie fleece</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[23px] relative shrink-0 w-[171.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#004ac6] text-[14px] whitespace-nowrap">$89</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function ImageHoodieFleece() {
  return (
    <div className="absolute h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Image (Hoodie fleece)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHoodieFleece} />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[#efefef] h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageHoodieFleece />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[375.63px] top-0 w-[171.813px]" data-name="Container">
      <PlaceholderForContacto2 />
      <Container118 />
      <Container119 />
    </div>
  );
}

function PlaceholderForContacto3() {
  return <div className="h-[229.075px] relative shrink-0 w-[171.813px]" data-name="Placeholder for Contacto" />;
}

function Paragraph32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[16.9px] relative shrink-0 text-[#141b2b] text-[13px] whitespace-nowrap">Sweater cuello</p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[23px] relative shrink-0 w-[171.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Jost:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#004ac6] text-[14px] whitespace-nowrap">$120</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Paragraph32 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function ImageSweaterCuello() {
  return (
    <div className="absolute h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Image (Sweater cuello)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSweaterCuello} />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-[#efefef] h-[229.075px] left-0 top-0 w-[171.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageSweaterCuello />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[563.44px] top-0 w-[171.813px]" data-name="Container">
      <PlaceholderForContacto3 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[278.975px] relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Container114 />
      <Container117 />
      <Container120 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container110 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph25 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[864.75px] top-0 w-[735.25px]" data-name="Container">
      <Container107 />
      <Container109 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[627px] relative shrink-0 w-full" data-name="Container">
      <Form />
      <Container106 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[35px] items-start relative size-full">
        <Container98 />
        <Container100 />
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="bg-[#f5f5f5] h-[972px] relative shrink-0 w-[1920px]" data-name="Contacto">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between px-[160px] py-[80px] relative size-full">
        <Frame13 />
      </div>
    </div>
  );
}

function CrearSeccionNosotros() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[6771px] items-start relative shrink-0 w-full" data-name="Crear sección 'Nosotros'">
      <Frame17 />
      <Body />
      <Frame12 />
      <ContactSection />
    </div>
  );
}

function Nosotros() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="nosotros">
      <CrearSeccionNosotros />
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Nosotros />
    </div>
  );
}
