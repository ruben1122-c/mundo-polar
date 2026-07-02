import svgPaths from "./svgPaths";
import { ASSETS } from "@/config/assets";

const img01 = ASSETS.home.hero;
const imgCms01Jpg = ASSETS.home.familyAndPet;
const imgClothes = ASSETS.home.categoryWomen;
const imgClothes1 = ASSETS.home.categoryMen;
const imgClothes2 = ASSETS.home.categoryKids;
const imgClothes3 = ASSETS.home.categoryPets;
const img32 = ASSETS.products.hoodedBrownJacket;
const img34 = ASSETS.products.shortBrownCoat;
const img36 = ASSETS.products.beigeSweater;
const imgGildanMensHeavyCottonAdultTShirt = ASSETS.products.gildanHeavyCottonShirt;
const img40 = ASSETS.products.turtleneckSweater;
const imgColeccionInvierno = ASSETS.home.winterCollectionBanner;
const img68 = ASSETS.shared.footerMarks;
const imgRectangle114 = ASSETS.logo;

function Component1() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="02">
      <p className="[word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[185px] leading-[0] left-0 text-[0px] text-shadow-[0px_4px_9.5px_rgba(0,0,0,0.25)] text-white top-[-9px] tracking-[-2px] w-[878px] whitespace-pre-wrap">
        <span className="leading-[88.32px] text-[96px]">{`Abrigate con estilo  `}</span>
        <span className="leading-[88.32px] text-[#004ac6] text-[96px]">Mundo Polar</span>
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)] h-[68px] relative shrink-0 w-full" data-name="03">
      <p className="[word-break:break-word] absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[60px] leading-[34px] left-0 text-[32px] text-shadow-[0px_4px_7.8px_rgba(0,0,0,0.25)] text-white top-[4px] w-[797px]">Ropa de invierno para mujer, hombre, niños, niñas y mascotas. Comodidad, calidad y estilo para toda la familia.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Component1 />
      <Component2 />
    </div>
  );
}

function Component() {
  return (
    <div className="opacity-93 relative shrink-0 w-full" data-name="01">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img01} />
      <div className="content-stretch flex flex-col items-start px-[111px] py-[255px] relative size-full">
        <Frame24 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start not-italic relative shrink-0 w-[883px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#434655] text-[32px] w-full">En Mundo Polar, creemos que el invierno es una temporada para disfrutar en familia, sin dejar de lado el estilo y la comodidad. Desde nuestros inicios, nos hemos dedicado a ofrecer prendas de alta calidad que combinan diseño minimalista, máxima calidez y durabilidad.</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#004ac6] text-[24px] w-full">
        <p className="leading-[24px] mb-0">Nuestro compromiso es mantener a toda tu familia abrigada, incluyendo a los</p>
        <p className="leading-[24px] mb-0">más pequeños y a tus mascotas, con materiales sostenibles y procesos de</p>
        <p className="leading-[24px]">fabricación éticos.</p>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="h-[44px] relative shrink-0 w-[169px]" data-name="218">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[28px] leading-[28px] left-[calc(50%-0.5px)] text-[14px] text-black text-center top-[8px] tracking-[0.6px] uppercase w-[104px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        conoce más
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[61px] items-start relative shrink-0 w-[958px]">
      <p className="[word-break:break-word] font-['Jost:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[64px] text-black tracking-[0.8px] w-[min-content]">¿Quienes somos?</p>
      <Frame17 />
      <Component52 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[53px] relative shrink-0 w-[1093px]">
      <Frame20 />
    </div>
  );
}

function Cms01Jpg() {
  return (
    <div className="h-[680px] relative shrink-0 w-[821px]" data-name="cms-01.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.4%] left-0 max-w-none top-[-3.15%] w-[99.96%]" src={imgCms01Jpg} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1914px]">
      <Frame18 />
      <Cms01Jpg />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Clothes() {
  return (
    <div className="absolute h-[453.39px] left-0 right-0 rounded-[5px] top-0" data-name="Clothes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClothes} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="-translate-x-1/2 absolute h-[453.39px] left-1/2 overflow-clip top-0 w-[362.72px]" data-name="11">
      <Clothes />
    </div>
  );
}

function Component4() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-1/2 overflow-clip top-[9px] w-[59.41px]" data-name="12">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-0 tracking-[0.4px] w-[59.793px]">Dama</p>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[44.8px] left-1/2 rounded-[5px] top-[calc(50%+158.97px)] w-[139.41px]" data-name="Background">
      <Component4 />
    </div>
  );
}

function Group1Of3() {
  return (
    <div className="h-[453.39px] overflow-clip relative shrink-0 w-[362.72px]" data-name="Group - 1 of 9">
      <Component3 />
      <Background />
    </div>
  );
}

function Clothes1() {
  return (
    <div className="absolute h-[453.39px] left-0 right-0 rounded-[5px] top-0" data-name="Clothes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClothes1} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 absolute h-[453.39px] left-1/2 overflow-clip top-0 w-[362.72px]" data-name="11">
      <Clothes1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.37px)] overflow-clip top-[9.73px] w-[59.41px]" data-name="12">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[28.8px] left-[calc(50%-0.08px)] text-[18px] text-black text-center top-[-0.27px] tracking-[0.4px] w-[102px]">Hombre</p>
    </div>
  );
}

function Background1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[44.8px] left-1/2 rounded-[5px] top-[calc(50%+158.97px)] w-[139.41px]" data-name="Background">
      <Component6 />
    </div>
  );
}

function Group1Of() {
  return (
    <div className="h-[453.39px] overflow-clip relative shrink-0 w-[362.72px]" data-name="Group - 1 of 6">
      <Component5 />
      <Background1 />
    </div>
  );
}

function Clothes2() {
  return (
    <div className="absolute h-[453.39px] left-0 right-0 rounded-[5px] top-0" data-name="Clothes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClothes2} />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 absolute h-[453.39px] left-1/2 overflow-clip top-0 w-[362.72px]" data-name="11">
      <Clothes2 />
    </div>
  );
}

function Component8() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-1/2 overflow-clip top-[9px] w-[59.41px]" data-name="12">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-0 tracking-[0.4px] w-[59.793px]">Niños</p>
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[44.8px] left-1/2 rounded-[5px] top-[calc(50%+158.97px)] w-[139.41px]" data-name="Background">
      <Component8 />
    </div>
  );
}

function Group1Of1() {
  return (
    <div className="h-[453.39px] overflow-clip relative shrink-0 w-[362.72px]" data-name="Group - 1 of 7">
      <Component7 />
      <Background2 />
    </div>
  );
}

function Clothes3() {
  return (
    <div className="absolute h-[453.39px] left-0 right-0 rounded-[5px] top-0" data-name="Clothes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClothes3} />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="-translate-x-1/2 absolute h-[453.39px] left-1/2 overflow-clip top-0 w-[362.72px]" data-name="11">
      <Clothes3 />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-1/2 overflow-clip top-[9px] w-[59.41px]" data-name="12">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-0 tracking-[0.4px] w-[59.793px]">Mascotas</p>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[44.8px] left-1/2 rounded-[5px] top-[calc(50%+158.97px)] w-[139.41px]" data-name="Background">
      <Component10 />
    </div>
  );
}

function Group1Of2() {
  return (
    <div className="h-[453.39px] overflow-clip relative shrink-0 w-[362.72px]" data-name="Group - 1 of 8">
      <Component9 />
      <Background3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Group1Of3 />
      <Group1Of />
      <Group1Of1 />
      <Group1Of2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#141b2b] text-[30px] text-center tracking-[-0.3px] w-full">
        <p className="leading-[38px]">Compra por categoría</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1570.88px]">
      <Frame12 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[152px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#004ac6] text-[32px] top-[10px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[20px]">Ver todos</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#141b2b] text-[30px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[38px]">Productos destacados</p>
      </div>
      <Link />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img32} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[211.53px]" data-name="33">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[211.73px]">Chaqueta con capucha color marrón</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component12 />
      <Container2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-[103.17px] w-[33.138px]">$50</p>
    </div>
  );
}

function Group1Of4() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[299.59px]" data-name="Group - 1 of 7">
      <Container1 />
      <Background4 />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="34">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img34} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[249.75px]" data-name="35">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[249.95px]">Abrigo corto color marrón</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container6 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component14 />
      <Container5 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.17px)] text-[18px] text-black text-center top-[103.17px] w-[44.324px]">$500</p>
    </div>
  );
}

function Group2Of() {
  return (
    <div className="absolute bg-white bottom-px left-[330.59px] overflow-clip top-px w-[299.59px]" data-name="Group - 2 of 7">
      <Container4 />
      <Background5 />
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img36} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component15 />
    </div>
  );
}

function Component16() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[247.13px]" data-name="37">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[247.33px]">Sweater poliester beige</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container9 />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component16 />
      <Container8 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.16px)] text-[18px] text-black text-center top-[103.17px] w-[44.916px]">$400</p>
    </div>
  );
}

function Group3Of() {
  return (
    <div className="absolute bg-white bottom-px left-[660.19px] overflow-clip top-px w-[299.59px]" data-name="Group - 3 of 7">
      <Container7 />
      <Background6 />
    </div>
  );
}

function GildanMensHeavyCottonAdultTShirt() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="Gildan mens Heavy Cotton Adult T-Shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGildanMensHeavyCottonAdultTShirt} />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[29.59px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.4px] w-[18.719px]">-6%</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 top-0" data-name="38">
      <GildanMensHeavyCottonAdultTShirt />
      <Background7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component17 />
    </div>
  );
}

function Component18() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[258.97px]" data-name="39">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.17px]">
        <p className="leading-[25.2px] mb-0">Gildan mens Heavy Cotton Adult</p>
        <p className="leading-[25.2px]">T-Shirt</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container12 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component18 />
      <Container11 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[109.669px]">$189 – $200</p>
    </div>
  );
}

function Group4Of() {
  return (
    <div className="absolute bg-white bottom-px left-[989.78px] overflow-clip top-px w-[299.59px]" data-name="Group - 4 of 7">
      <Container10 />
      <Background8 />
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img40} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component19 />
    </div>
  );
}

function Component20() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[257.8px]" data-name="41">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[257.99px]">
        <p className="leading-[25.2px] mb-0">Happy Cherry Kids Down Cotton</p>
        <p className="leading-[25.2px]">Vest Winter</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container15 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component20 />
      <Container14 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[32.756px]">$25</p>
    </div>
  );
}

function Group5Of() {
  return (
    <div className="absolute bg-white bottom-px left-[1319.38px] overflow-clip top-px w-[299.59px]" data-name="Group - 5 of 7">
      <Container13 />
      <Background9 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[538.44px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Group1Of4 />
      <Group2Of />
      <Group3Of />
      <Group4Of />
      <Group5Of />
    </div>
  );
}

function Region() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1620px]" data-name="Region">
      <Container />
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img32} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component21 />
    </div>
  );
}

function Component22() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[211.53px]" data-name="33">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[211.73px]">Chaqueta con capucha color marrón</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container19 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component22 />
      <Container18 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-[103.17px] w-[33.138px]">$50</p>
    </div>
  );
}

function Group1Of5() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[299.59px]" data-name="Group - 1 of 7">
      <Container17 />
      <Background10 />
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="34">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img34} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component23 />
    </div>
  );
}

function Component24() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[249.75px]" data-name="35">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[249.95px]">Abrigo corto color marrón</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container22 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component24 />
      <Container21 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.17px)] text-[18px] text-black text-center top-[103.17px] w-[44.324px]">$500</p>
    </div>
  );
}

function Group2Of1() {
  return (
    <div className="absolute bg-white bottom-px left-[330.59px] overflow-clip top-px w-[299.59px]" data-name="Group - 2 of 7">
      <Container20 />
      <Background11 />
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img36} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component25 />
    </div>
  );
}

function Component26() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[247.13px]" data-name="37">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[247.33px]">Sweater poliester beige</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container25 />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component26 />
      <Container24 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.16px)] text-[18px] text-black text-center top-[103.17px] w-[44.916px]">$400</p>
    </div>
  );
}

function Group3Of1() {
  return (
    <div className="absolute bg-white bottom-px left-[660.19px] overflow-clip top-px w-[299.59px]" data-name="Group - 3 of 7">
      <Container23 />
      <Background12 />
    </div>
  );
}

function GildanMensHeavyCottonAdultTShirt1() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="Gildan mens Heavy Cotton Adult T-Shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGildanMensHeavyCottonAdultTShirt} />
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[29.59px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.4px] w-[18.719px]">-6%</p>
    </div>
  );
}

function Component27() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 top-0" data-name="38">
      <GildanMensHeavyCottonAdultTShirt1 />
      <Background13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component27 />
    </div>
  );
}

function Component28() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[258.97px]" data-name="39">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.17px]">
        <p className="leading-[25.2px] mb-0">Gildan mens Heavy Cotton Adult</p>
        <p className="leading-[25.2px]">T-Shirt</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container28 />
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component28 />
      <Container27 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[109.669px]">$189 – $200</p>
    </div>
  );
}

function Group4Of1() {
  return (
    <div className="absolute bg-white bottom-px left-[989.78px] overflow-clip top-px w-[299.59px]" data-name="Group - 4 of 7">
      <Container26 />
      <Background14 />
    </div>
  );
}

function Component29() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img40} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component29 />
    </div>
  );
}

function Component30() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[257.8px]" data-name="41">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[257.99px]">
        <p className="leading-[25.2px] mb-0">Happy Cherry Kids Down Cotton</p>
        <p className="leading-[25.2px]">Vest Winter</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container31 />
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component30 />
      <Container30 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[32.756px]">$25</p>
    </div>
  );
}

function Group5Of1() {
  return (
    <div className="absolute bg-white bottom-px left-[1319.38px] overflow-clip top-px w-[299.59px]" data-name="Group - 5 of 7">
      <Container29 />
      <Background15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[538.44px] overflow-clip relative shrink-0 w-[1620px]" data-name="Container">
      <Group1Of5 />
      <Group2Of1 />
      <Group3Of1 />
      <Group4Of1 />
      <Group5Of1 />
    </div>
  );
}

function Region1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region">
      <Container16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Region />
      <Region1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1620px]">
      <Frame13 />
      <Frame22 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px] mb-0">Nueva Colección de</p>
        <p className="leading-[56px]">Invierno</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Descubre las últimas tendencias y mantén el frío a raya. Aprovecha</p>
        <p className="leading-[28px]">hasta un 30% de descuento en artículos seleccionados.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#004ac6] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] px-[32px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[20px]">Ver ofertas</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] p-[48px] relative size-full">
        <Heading />
        <Container33 />
        <Button />
      </div>
    </div>
  );
}

function ColeccionInvierno() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colección Invierno">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[308%] left-[-0.03%] max-w-none top-[-123.14%] w-full" src={imgColeccionInvierno} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[36px] py-[125px] relative size-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[152px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#004ac6] text-[32px] top-[10px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[20px]">Ver todos</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#141b2b] text-[30px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[38px]">Nuevos ingresos</p>
      </div>
      <Link1 />
    </div>
  );
}

function Component31() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img32} />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component31 />
    </div>
  );
}

function Component32() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[211.53px]" data-name="33">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[211.73px]">Chaqueta con capucha color marrón</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container37 />
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component32 />
      <Container36 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-[103.17px] w-[33.138px]">$50</p>
    </div>
  );
}

function Group1Of6() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[299.59px]" data-name="Group - 1 of 7">
      <Container35 />
      <Background16 />
    </div>
  );
}

function Component33() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="34">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img34} />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component33 />
    </div>
  );
}

function Component34() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[249.75px]" data-name="35">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[249.95px]">Abrigo corto color marrón</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container40 />
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component34 />
      <Container39 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.17px)] text-[18px] text-black text-center top-[103.17px] w-[44.324px]">$500</p>
    </div>
  );
}

function Group2Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[330.59px] overflow-clip top-px w-[299.59px]" data-name="Group - 2 of 7">
      <Container38 />
      <Background17 />
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img36} />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component35 />
    </div>
  );
}

function Component36() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[247.13px]" data-name="37">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[247.33px]">Sweater poliester beige</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container43 />
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component36 />
      <Container42 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.16px)] text-[18px] text-black text-center top-[103.17px] w-[44.916px]">$400</p>
    </div>
  );
}

function Group3Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[660.19px] overflow-clip top-px w-[299.59px]" data-name="Group - 3 of 7">
      <Container41 />
      <Background18 />
    </div>
  );
}

function GildanMensHeavyCottonAdultTShirt2() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="Gildan mens Heavy Cotton Adult T-Shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGildanMensHeavyCottonAdultTShirt} />
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[29.59px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.4px] w-[18.719px]">-6%</p>
    </div>
  );
}

function Component37() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 top-0" data-name="38">
      <GildanMensHeavyCottonAdultTShirt2 />
      <Background19 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component37 />
    </div>
  );
}

function Component38() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[258.97px]" data-name="39">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.17px]">
        <p className="leading-[25.2px] mb-0">Gildan mens Heavy Cotton Adult</p>
        <p className="leading-[25.2px]">T-Shirt</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container46 />
    </div>
  );
}

function Background20() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component38 />
      <Container45 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[109.669px]">$189 – $200</p>
    </div>
  );
}

function Group4Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[989.78px] overflow-clip top-px w-[299.59px]" data-name="Group - 4 of 7">
      <Container44 />
      <Background20 />
    </div>
  );
}

function Component39() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img40} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component39 />
    </div>
  );
}

function Component40() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[257.8px]" data-name="41">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[257.99px]">
        <p className="leading-[25.2px] mb-0">Happy Cherry Kids Down Cotton</p>
        <p className="leading-[25.2px]">Vest Winter</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container49 />
    </div>
  );
}

function Background21() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component40 />
      <Container48 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[32.756px]">$25</p>
    </div>
  );
}

function Group5Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[1319.38px] overflow-clip top-px w-[299.59px]" data-name="Group - 5 of 7">
      <Container47 />
      <Background21 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[538.44px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Group1Of6 />
      <Group2Of2 />
      <Group3Of2 />
      <Group4Of2 />
      <Group5Of2 />
    </div>
  );
}

function Region2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1620px]" data-name="Region">
      <Container34 />
    </div>
  );
}

function Component41() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img32} />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component41 />
    </div>
  );
}

function Component42() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[211.53px]" data-name="33">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[211.73px]">Chaqueta con capucha color marrón</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container53 />
    </div>
  );
}

function Background22() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component42 />
      <Container52 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.19px)] text-[18px] text-black text-center top-[103.17px] w-[33.138px]">$50</p>
    </div>
  );
}

function Group1Of7() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[299.59px]" data-name="Group - 1 of 7">
      <Container51 />
      <Background22 />
    </div>
  );
}

function Component43() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="34">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img34} />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component43 />
    </div>
  );
}

function Component44() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[249.75px]" data-name="35">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[249.95px]">Abrigo corto color marrón</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container56 />
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component44 />
      <Container55 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.17px)] text-[18px] text-black text-center top-[103.17px] w-[44.324px]">$500</p>
    </div>
  );
}

function Group2Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[330.59px] overflow-clip top-px w-[299.59px]" data-name="Group - 2 of 7">
      <Container54 />
      <Background23 />
    </div>
  );
}

function Component45() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img36} />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component45 />
    </div>
  );
}

function Component46() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[247.13px]" data-name="37">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[247.33px]">Sweater poliester beige</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container59 />
    </div>
  );
}

function Background24() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component46 />
      <Container58 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.16px)] text-[18px] text-black text-center top-[103.17px] w-[44.916px]">$400</p>
    </div>
  );
}

function Group3Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[660.19px] overflow-clip top-px w-[299.59px]" data-name="Group - 3 of 7">
      <Container57 />
      <Background24 />
    </div>
  );
}

function GildanMensHeavyCottonAdultTShirt3() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="Gildan mens Heavy Cotton Adult T-Shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGildanMensHeavyCottonAdultTShirt} />
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[29.59px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.4px] w-[18.719px]">-6%</p>
    </div>
  );
}

function Component47() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 top-0" data-name="38">
      <GildanMensHeavyCottonAdultTShirt3 />
      <Background25 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component47 />
    </div>
  );
}

function Component48() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[258.97px]" data-name="39">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.17px]">
        <p className="leading-[25.2px] mb-0">Gildan mens Heavy Cotton Adult</p>
        <p className="leading-[25.2px]">T-Shirt</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-[calc(50%+0.01px)] overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container62 />
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component48 />
      <Container61 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[109.669px]">$189 – $200</p>
    </div>
  );
}

function Group4Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[989.78px] overflow-clip top-px w-[299.59px]" data-name="Group - 4 of 7">
      <Container60 />
      <Background26 />
    </div>
  );
}

function Component49() {
  return (
    <div className="absolute h-[389.47px] left-0 right-0 top-0" data-name="40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img40} />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[389.47px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component49 />
    </div>
  );
}

function Component50() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[257.8px]" data-name="41">
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[257.99px]">
        <p className="leading-[25.2px] mb-0">Happy Cherry Kids Down Cotton</p>
        <p className="leading-[25.2px]">Vest Winter</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container65 />
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-white inset-[389.47px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component50 />
      <Container64 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[103.17px] w-[32.756px]">$25</p>
    </div>
  );
}

function Group5Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[1319.38px] overflow-clip top-px w-[299.59px]" data-name="Group - 5 of 7">
      <Container63 />
      <Background27 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[538.44px] overflow-clip relative shrink-0 w-[1620px]" data-name="Container">
      <Group1Of7 />
      <Group2Of3 />
      <Group3Of3 />
      <Group4Of3 />
      <Group5Of3 />
    </div>
  );
}

function Region3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region">
      <Container50 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Region2 />
      <Region3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1620px]">
      <Frame15 />
      <Frame28 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[82px] items-center relative shrink-0 w-full">
      <Frame19 />
      <Frame16 />
      <Frame14 />
      <ColeccionInvierno />
      <Frame23 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[74px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame33 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[51px] left-0 top-[2px] w-[320.19px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51px] leading-[28px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[320.39px]">Recibe novedades, promociones y lanzamientos de nuestra colección de invierno.</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[23px] left-[15px] overflow-clip right-[50px] top-[13.5px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-0 text-[#555] text-[16px] top-0 tracking-[0.3px] w-[133.884px]">Tu correo electrónico</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[50px] left-0 overflow-clip right-0 rounded-[5px] top-[106px]" data-name="Input">
      <Container66 />
    </div>
  );
}

function NewsletterIconSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="newsletter-icon.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_3605)" id="newsletter-icon.svg">
          <path d={svgPaths.p15593200} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3605">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NewsletterIconSvgFill() {
  return (
    <div className="absolute h-[50px] left-0 overflow-clip top-0 w-[52px]" data-name="newsletter-icon.svg fill">
      <NewsletterIconSvg />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute h-[50px] overflow-clip right-0 rounded-[5px] top-[106px] w-[52px]" data-name="Input">
      <NewsletterIconSvgFill />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[156px] left-0 right-0 top-[61px]" data-name="Form">
      <Label />
      <Input />
      <Input1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[217px] left-[260px] right-[1296.92px] top-[65px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 w-[348px]">Mantente al día con Mundo Polar</p>
      <Form />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[20px] top-[64.31px]">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[20px]" data-name="Icon">
          <div className="absolute inset-[0_0_-2.74%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.5474">
              <g id="Icon">
                <path d={svgPaths.p35d52800} fill="var(--fill-0, #AAAAAA)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[20px] top-[132.31px]">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[20px]" data-name="Icon" />
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="absolute h-[23px] left-[30px] top-[129px] w-[124.03px]" data-name="757">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[38px] leading-[24px] left-0 text-[#aaa] text-[16px] top-[-15px] tracking-[0.3px] w-[137px]">+51 962 690 195</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[20px] top-[176.31px]">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[20px]" data-name="Icon">
          <div className="absolute inset-[0_-0.2%_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0391 20">
              <g id="Icon">
                <path d={svgPaths.p1a119000} fill="var(--fill-0, #AAAAAA)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component54() {
  return (
    <div className="absolute h-[23px] left-[30px] top-[173px] w-[144.5px]" data-name="758">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[192px]">contacto@mundopolar.com</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[197px] left-[681px] right-[876.66px] top-[74px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 w-[133px]">Contacto</p>
      <Icon />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[30px] text-[#aaa] text-[16px] top-[61px] tracking-[0.3px] w-[249.754px]">Lima, Perú</p>
      <Icon1 />
      <div className="absolute flex inset-[60.91%_94.47%_30.17%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0944 17.5586">
              <path d={svgPaths.p37f20500} fill="var(--fill-0, #AAAAAA)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Component53 />
      <Icon2 />
      <Component54 />
    </div>
  );
}

function Component55() {
  return (
    <div className="absolute h-[23px] left-0 top-[2px] w-[64.33px]" data-name="759">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[113px]">Sobre Nosotros</p>
    </div>
  );
}

function Component56() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[95.91px]" data-name="760">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[134px]">Nuestra Colección</p>
    </div>
  );
}

function Component57() {
  return (
    <div className="absolute h-[23px] left-0 top-[69.59px] w-[54.42px]" data-name="761">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.41px] tracking-[0.3px] w-[178px]">Preguntas Frecuentes</p>
    </div>
  );
}

function Component58() {
  return (
    <div className="absolute h-[23px] left-0 top-[103.39px] w-[91.91px]" data-name="762">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[92.252px]">Contáctanos</p>
    </div>
  );
}

function Component59() {
  return <div className="absolute h-[23px] left-0 top-[137.19px] w-[75.39px]" data-name="763" />;
}

function List() {
  return (
    <div className="absolute h-[163.98px] left-0 right-0 top-[61px]" data-name="List">
      <Component55 />
      <Component56 />
      <Component57 />
      <Component58 />
      <Component59 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[224.98px] left-[1100.42px] right-[540.86px] top-[65px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 tracking-[0.3px] w-[158.633px]">Conócenos</p>
      <List />
    </div>
  );
}

function Component60() {
  return (
    <div className="absolute h-[23px] left-0 top-[2px] w-[85.75px]" data-name="764">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[170px]">Términos y Condiciones</p>
    </div>
  );
}

function Component61() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[67.03px]" data-name="765">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[170px]">Política de Privacidad</p>
    </div>
  );
}

function Component62() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[70px] w-[107px]" data-name="766">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[107px]">Guía de Tallas</p>
    </div>
  );
}

function Component63() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[103px] w-[115px]" data-name="767">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[180px]">Cambios y Devoluciones</p>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[163.98px] left-0 right-0 top-[61px]" data-name="List">
      <Component60 />
      <Component61 />
      <Component62 />
      <Component63 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute h-[224.98px] left-[1409.14px] right-[260px] top-[65px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-[-0.14px] text-[24px] text-white top-0 tracking-[0.3px] w-[158px]">Información</p>
      <List1 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid h-[365.98px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Component64() {
  return <div className="absolute h-[23px] left-[605.17px] top-[395.98px] w-[54.88px]" data-name="769" />;
}

function Component51() {
  return (
    <div className="absolute h-[25px] right-[260px] top-[395.98px] w-[282px]" data-name="68">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img68} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111] h-[511px] relative shrink-0 w-[1921px]" data-name="Footer">
      <HorizontalBorder />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[260px] text-[#aaa] text-[16px] top-[396.17px] tracking-[0.3px] w-[427px]">© 2026 Mundo Polar — Todos los derechos reservados.</p>
      <Component64 />
      <Component51 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[74px] items-center left-0 right-0 top-[72px]">
      <Frame36 />
      <Footer />
    </div>
  );
}

function Frame7() {
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

function Frame31() {
  return (
    <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
      <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[34px]">Contactos</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Ofertas</p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0">
        <Frame31 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[33px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Inicio</p>
        </div>
      </div>
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
      <Frame34 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame32 />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0">
      <LucideSearch />
      <div className="[word-break:break-word] flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#9b9b9b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[34px]">Buscar productos</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex flex-col h-[48px] items-start pl-[20px] pr-[418px] py-[7px] relative rounded-[20px] shrink-0 w-[581px]">
      <Frame1 />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[59px] items-center relative shrink-0">
      <LucideHeart />
      <LucideShoppingCart />
      <LucideUserRound />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[84px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[581px]">
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[877px]">
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[55px] h-[68px] items-center relative shrink-0 w-[1884px]">
      <Frame7 />
      <Frame10 />
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[1884px]">
      <Frame9 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[72px] items-start left-0 pl-[37px] top-0 w-[1921px]">
      <Frame37 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[6012px] relative shrink-0 w-[1921px]">
      <Frame29 />
      <Frame35 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white content-stretch flex items-center relative size-full" data-name="inicio">
      <Frame30 />
    </div>
  );
}
