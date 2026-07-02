import { OptimizedImage } from "@/app/components/OptimizedImage";
import svgPaths from "./svgPaths";
import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";

const imgRectangle114 = ASSETS.logo;
const imgImage12 = ASSETS.ofertas.hero;
const img42 = ASSETS.products.waterproofJacket;
const imgWomensRibbedTurtleneckBaseLayerUnderShirts = ASSETS.products.turtleneckBaseLayer;
const imgAdagroWomensTShirtsTurtleNeckSlimFitTee = ASSETS.products.turtleneckSlimFit;
const imgTommyHilfigerWomensKnitSheathDress = ASSETS.products.knitDress;
const imgCasualSleevelessStripedWomenBrownTop = ASSETS.products.stripedBrownTop;
const imgHandKnittedWomensWoolenShoks = ASSETS.products.woolSocks;
const imgKatieHolmesShufflesHerUggBoots = ASSETS.products.winterBoots;
const imgMensSolidPoloNeck100CottonBlue = ASSETS.products.mensBluePolo;
const imgMenLetterLabelDecorWoolenBeanieHat = ASSETS.products.woolBeanie;
const imgChalierWarmWinterHeadbandForWomen = ASSETS.products.winterHeadband;
const imgOddCoolSleeveVentCollarKnit = ASSETS.products.knitTop;
const imgMahzaWomanSweaterAutumnAndWinter = ASSETS.products.winterSweater;
const imgSection = ASSETS.ofertas.categoryBackground;
const imgImage13 = ASSETS.ofertas.categoryJackets;
const imgImage15 = ASSETS.ofertas.categoryThermalSets;
const imgImage14 = ASSETS.ofertas.categoryScarves;
const img702 = ASSETS.ofertas.categoryGloves;
const imgImage16 = ASSETS.ofertas.categoryBoots;
const imgLinenDressWithBackOpeningDress = ASSETS.products.linenDress;
const imgWomenSolidPoloNeckCottonBlendWhiteTShirt = ASSETS.products.whitePolo;
const imgImage17 = ASSETS.products.polarSet;
const imgWomensRibbedTurtleneckBaseLayerUnderShirts1 = ASSETS.products.ribbedTurtleneck;
const imgCmsBanner01Jpg = ASSETS.ofertas.kidsCollectionBanner;
const imgCmsBanner02Jpg = ASSETS.ofertas.trendsBanner;
const imgTesti1Jpg = ASSETS.ofertas.testimonial01;
const imgTesti2Jpg = ASSETS.ofertas.testimonial02;
const imgTesti3Jpg = ASSETS.ofertas.testimonial03;
const img68 = ASSETS.shared.footerMarks;

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[192px]">
      <div className="h-[69px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <OptimizedImage alt="" className="absolute h-full left-[0.2%] max-w-none top-0 w-[99.59%]" src={imgRectangle114} />
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

function Frame13() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[30px] items-center relative shrink-0">
      <a className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Ofertas</p>
        </div>
      </a>
      <a className="content-stretch flex items-center relative shrink-0">
        <Frame11 />
      </a>
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
      <a className="bg-white content-stretch cursor-pointer flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Nosotros</p>
        </div>
      </a>
      <div className="bg-white content-stretch flex h-[31px] items-center justify-center pl-[28px] pr-[29px] py-[9px] relative rounded-[15px] shrink-0 w-[93px]">
        <div className="[word-break:break-word] flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[34px]">Categorías</p>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame12 />
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[37px] relative size-full">
        <Frame15 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="29">
      <div className="absolute h-[799px] left-[-24px] top-0 w-[1968px]" data-name="image 12">
        <OptimizedImage priority kind="hero" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[164px] leading-[70px] left-[258px] text-[58px] text-black top-[254px] w-[715px]">Encuentra el abrigo perfecto para este invierno!</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[34px] left-[261px] right-[1470.55px] top-[219px]" data-name="30">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[29px] leading-[34px] left-0 text-[20px] text-black top-[2px] w-[282px]">Hasta 25% de descuento</p>
    </div>
  );
}

function Component4() {
  return <div className="absolute h-[140px] left-[240px] right-[1238.91px] top-[265px]" data-name="31" />;
}

function Component5() {
  return (
    <div className="absolute h-[60px] left-[262px] right-[1150.45px] top-[416px]" data-name="32">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[56px] leading-[30px] left-0 text-[18px] text-black top-[2px] w-[507.75px]">Descubre nuestra nueva colección de ropa térmica, casacas, gorros y accesorios para niños y niñas.</p>
    </div>
  );
}

function Component34() {
  return (
    <button className="absolute border border-black border-solid h-[44px] left-[262px] right-[1524.39px] rounded-[5px] top-[509px] cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white group bg-transparent p-0" data-name="687">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[42px] left-[14px] text-[16px] text-black group-hover:text-white top-[-1px] w-[103px] transition-colors duration-200">Comprar ahora</p>
    </button>
  );
}

function Component1() {
  return (
    <div className="absolute h-[780px] left-0 overflow-clip top-0 w-[1920px]" data-name="16">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component34 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute flex h-[40px] items-center justify-center left-[-3px] top-0 w-[43px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[40px] relative w-[43px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 40">
            <g id="Icon">
              <path d={svgPaths.p39b82900} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RsArrow() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] left-[30px] rounded-[20px] size-[40px] top-1/2" data-name="rs-arrow">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute flex h-[40px] items-center justify-center left-0 top-0 w-[43px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[40px] relative w-[43px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 40">
            <g id="Icon">
              <path d={svgPaths.p213b780} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RsArrow1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] h-[40px] left-[96.35%] right-[1.56%] rounded-[20px] top-1/2" data-name="rs-arrow">
      <Icon1 />
    </div>
  );
}

function RsModule() {
  return (
    <div className="absolute h-[780px] left-[3px] overflow-clip top-0 w-[1920px]" data-name="rs-module">
      <Component1 />
      <RsArrow />
      <RsArrow1 />
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute bg-[#eaeaea] h-[780px] left-0 top-0 w-[1920px]" data-name="137">
      <RsModule />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#eaeaea] h-[780px] relative shrink-0 w-full" data-name="Section">
      <Component17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full">
      <Section />
      <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] relative shrink-0 text-[34px] text-black text-center w-full">Ofertas especiales de invierno</p>
    </div>
  );
}

function Region() {
  return <div className="h-[584.17px] relative shrink-0 w-[1404px]" data-name="Region" />;
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-center left-0 top-0 w-[1920px]">
      <Frame19 />
      <Region />
    </div>
  );
}

function ProductosDestacados() {
  return (
    <div className="absolute flex inset-[1809.34px_305px_4854px_215px] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="Productos destacados" />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-0" data-name="42">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-[-13.6%] max-w-none size-[127.22%] top-[0.06%]" src={img42} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="715">
      <Component7 />
      <Background />
    </div>
  );
}

function Component50() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[259.2px]" data-name="716">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.4px]">Casaca impermeable</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container2 />
    </div>
  );
}

function Del() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.7px)] opacity-50 top-[102.17px] w-[41.44px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%-7.8px)] line-through text-[#777] text-[18px] text-center top-[-0.34px] w-[58px]">S/ 299</p>
    </div>
  );
}

function Ins() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.41px)] top-[102.17px] w-[43.98px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+7.59px)] text-[18px] text-black text-center top-[-0.34px] w-[59px]">S/ 248</p>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component50 />
      <Container1 />
      <Del />
      <Ins />
    </div>
  );
}

function Group1Of2() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[327px]" data-name="Group - 1 of 6">
      <Component49 />
      <Background1 />
    </div>
  );
}

function WomensRibbedTurtleneckBaseLayerUnderShirts() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-[-0.17px]" data-name="Womens Ribbed Turtleneck Base Layer Under Shirts">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[141.65%] left-[-20.8%] max-w-none top-0 w-[141.59%]" src={imgWomensRibbedTurtleneckBaseLayerUnderShirts} />
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[72px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] top-[calc(50%-8px)] w-[26.688px]">
        <p className="leading-[18px]">501</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.18px)] text-[11px] top-[23px] w-[27.413px]">DAYS</p>
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[119px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] top-[calc(50%-8px)] w-[17.391px]">
        <p className="leading-[18px]">16</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.16px)] text-[11px] top-[23px] w-[21.275px]">HRS</p>
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[166px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] top-[calc(50%-8px)] w-[19.222px]">
        <p className="leading-[18px]">50</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.16px)] text-[11px] top-[23px] w-[21.355px]">MIN</p>
    </div>
  );
}

function ParagraphBackground3() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[213px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] top-[calc(50%-8px)] w-[20.067px]">
        <p className="leading-[18px]">46</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.15px)] text-[11px] top-[23px] w-[20.842px]">SEC</p>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component51() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="717">
      <WomensRibbedTurtleneckBaseLayerUnderShirts />
      <ParagraphBackground />
      <ParagraphBackground1 />
      <ParagraphBackground2 />
      <ParagraphBackground3 />
      <Background2 />
    </div>
  );
}

function Component52() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[256.69px]" data-name="718">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[256.88px]">Gorro tejido</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container4 />
    </div>
  );
}

function Del1() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.78px)] opacity-50 top-[102.17px] w-[41.34px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%-7.72px)] line-through text-[#777] text-[18px] text-center top-[-0.34px] w-[58px]">S/ 60</p>
    </div>
  );
}

function Ins1() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.37px)] top-[102.17px] w-[44.14px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+6.63px)] text-[18px] text-black text-center top-[-0.34px] w-[77px]">S/ 50</p>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component52 />
      <Container3 />
      <Del1 />
      <Ins1 />
    </div>
  );
}

function Group2Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[358px] overflow-clip top-px w-[327px]" data-name="Group - 2 of 6">
      <Component51 />
      <Background3 />
    </div>
  );
}

function AdagroWomensTShirtsTurtleNeckSlimFitTee() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-[-0.17px]" data-name="Adagro Womens T-shirts Turtle Neck Slim Fit Tee">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-[-21.17%] max-w-none size-[142.38%] top-[0.03%]" src={imgAdagroWomensTShirtsTurtleNeckSlimFitTee} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.89px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.17px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[24.042px]">-10%</p>
    </div>
  );
}

function Component53() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="719">
      <AdagroWomensTShirtsTurtleNeckSlimFitTee />
      <Background4 />
    </div>
  );
}

function Component54() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[286.13px]" data-name="720">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[286.32px]">Bufanda polar</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container6 />
    </div>
  );
}

function Del2() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-22.87px)] opacity-50 top-[102.17px] w-[39.3px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%-7.63px)] line-through text-[#777] text-[18px] text-center top-[-0.34px] w-[56px]">S/ 85</p>
    </div>
  );
}

function Ins2() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+22.36px)] top-[102.17px] w-[40.33px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+8.15px)] text-[18px] text-black text-center top-[-0.34px] w-[56px]">S/ 76</p>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component54 />
      <Container5 />
      <Del2 />
      <Ins2 />
    </div>
  );
}

function Group3Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[715px] overflow-clip top-px w-[327px]" data-name="Group - 3 of 6">
      <Component53 />
      <Background5 />
    </div>
  );
}

function TommyHilfigerWomensKnitSheathDress() {
  return (
    <div className="absolute h-[431px] left-0 right-0 rounded-[5px] top-[5.83px]" data-name="Tommy Hilfiger Women's Knit Sheath Dress">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[147.56%] left-[-22.63%] max-w-none top-0 w-[145.57%]" src={imgTommyHilfigerWomensKnitSheathDress} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.63px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.17px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.78px]">-16%</p>
    </div>
  );
}

function Component55() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="721">
      <TommyHilfigerWomensKnitSheathDress />
      <Background6 />
    </div>
  );
}

function Component56() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[289.98px]" data-name="722">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[290.18px]">Chaleco acolchado</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container8 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component56 />
      <Container7 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[102.83px] w-[128px]">S/ 49 – S/ 58</p>
    </div>
  );
}

function Group4Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[1072px] overflow-clip top-px w-[327px]" data-name="Group - 4 of 6">
      <Component55 />
      <Background7 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[584.17px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Group1Of2 />
      <Group2Of2 />
      <Group3Of2 />
      <Group4Of2 />
    </div>
  );
}

function CasualSleevelessStripedWomenBrownTop() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Casual Sleeveless Striped Women Brown Top">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCasualSleevelessStripedWomenBrownTop} />
      </div>
    </div>
  );
}

function ParagraphBackgroundShadow() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] h-[39.59px] left-1/2 rounded-[5px] text-[#da3f3f] text-center top-[375.4px] tracking-[0.3px] w-[183.16px]" data-name="Paragraph+Background+Shadow">
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-59.41px)] text-[13px] top-[9.8px] w-[34.333px]">465d</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%-34.71px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-15.65px)] text-[13px] top-[9.8px] w-[23.156px]">16h</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+3.43px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+24.92px)] text-[13px] top-[9.8px] w-[28.017px]">52m</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+46.4px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+65.4px)] text-[13px] top-[9.8px] w-[23.036px]">36s</p>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-black h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[28.72px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.15px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[17.833px]">-7%</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="598">
      <CasualSleevelessStripedWomenBrownTop />
      <ParagraphBackgroundShadow />
      <Background8 />
    </div>
  );
}

function Component19() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[266.91px]" data-name="599">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[23.8px] left-[calc(50%+0.1px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[267.1px]">Casaca acolchada para niña</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[73.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container11 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component19 />
      <Container10 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%-8.5px)] text-[18px] text-black text-center top-[66px] w-[144px]">S/ 279 – S/ 300</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white inset-[0_0_599.97px_0] overflow-clip" data-name="119">
      <Component18 />
      <Background9 />
    </div>
  );
}

function HandKnittedWomensWoolenShoks() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Hand Knitted Women’s Woolen shoks">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHandKnittedWomensWoolenShoks} />
      </div>
    </div>
  );
}

function ParagraphBackgroundShadow1() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] h-[39.59px] left-[calc(50%-0.01px)] rounded-[5px] text-[#da3f3f] text-center top-[375.4px] tracking-[0.3px] w-[182.36px]" data-name="Paragraph+Background+Shadow">
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-59.41px)] text-[13px] top-[9.8px] w-[33.541px]">438d</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%-35.1px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-16.05px)] text-[13px] top-[9.8px] w-[23.166px]">16h</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+3.04px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+24.52px)] text-[13px] top-[9.8px] w-[28.027px]">52m</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+46.01px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+65px)] text-[13px] top-[9.8px] w-[23.036px]">36s</p>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-black h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.35px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="600">
      <HandKnittedWomensWoolenShoks />
      <ParagraphBackgroundShadow1 />
      <Background10 />
    </div>
  );
}

function Component21() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[294.64px]" data-name="601">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.16px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[294.955px]">Casaca impermeable para niño</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container13 />
    </div>
  );
}

function Del3() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-26.5px)] opacity-50 top-[66.03px] w-[46px]" data-name="Del">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[0] left-[calc(50%-12.5px)] text-[#666] text-[18px] text-center top-0 w-[57px]">
        <span className="leading-[28.8px]">S/</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[28.8px] line-through">{` 360`}</span>
      </p>
    </div>
  );
}

function Ins3() {
  return <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+18.03px)] top-[66px] w-[32.38px]" data-name="Ins" />;
}

function Background11() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component21 />
      <Container12 />
      <Del3 />
      <Ins3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+30.5px)] text-[18px] text-black text-center top-[66.03px] w-[62px]">S/ 300</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white inset-[599.97px_0_0_0] overflow-clip" data-name="120">
      <Component20 />
      <Background11 />
    </div>
  );
}

function Group1Of1() {
  return (
    <div className="absolute bottom-px left-px top-px w-[327px]" data-name="Group - 1 of 5">
      <Component9 />
      <Component10 />
    </div>
  );
}

function KatieHolmesShufflesHerUggBoots() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Katie Holmes shuffles her Ugg boots">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgKatieHolmesShufflesHerUggBoots} />
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="602">
      <KatieHolmesShufflesHerUggBoots />
    </div>
  );
}

function Component23() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[287.3px]" data-name="603">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.16px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[287.612px]">Chompa de lana</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container15 />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component23 />
      <Container14 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[57px]">S/ 150</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white inset-[0_0_599.97px_0] overflow-clip" data-name="121">
      <Component22 />
      <Background12 />
    </div>
  );
}

function MensSolidPoloNeck100CottonBlue() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Men’s Solid Polo Neck 100% Cotton Blue">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMensSolidPoloNeck100CottonBlue} />
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="604">
      <MensSolidPoloNeck100CottonBlue />
    </div>
  );
}

function Component25() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[285px]" data-name="605">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[23.8px] left-[calc(50%+0.1px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[285.2px]">Conjunto térmico</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[73.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container17 />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component25 />
      <Container16 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[65.03px] w-[67px]">S/ 299</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-white inset-[599.97px_0_0_0] overflow-clip" data-name="122">
      <Component24 />
      <Background13 />
    </div>
  );
}

function Group2Of1() {
  return (
    <div className="absolute bottom-px left-[358px] top-px w-[327px]" data-name="Group - 2 of 5">
      <Component11 />
      <Component12 />
    </div>
  );
}

function MenLetterLabelDecorWoolenBeanieHat() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Men Letter Label Decor woolen Beanie hat">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMenLetterLabelDecorWoolenBeanieHat} />
      </div>
    </div>
  );
}

function ParagraphBackgroundShadow2() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] h-[39.59px] left-1/2 rounded-[5px] text-[#da3f3f] text-center top-[375.4px] tracking-[0.3px] w-[183.16px]" data-name="Paragraph+Background+Shadow">
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-59.41px)] text-[13px] top-[9.8px] w-[34.333px]">465d</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%-34.71px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-15.65px)] text-[13px] top-[9.8px] w-[23.156px]">16h</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+3.43px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+24.92px)] text-[13px] top-[9.8px] w-[28.017px]">52m</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+46.4px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+65.4px)] text-[13px] top-[9.8px] w-[23.036px]">36s</p>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-black h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="606">
      <MenLetterLabelDecorWoolenBeanieHat />
      <ParagraphBackgroundShadow2 />
      <Background14 />
    </div>
  );
}

function Component27() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[246.09px]" data-name="607">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[23.8px] left-[calc(50%+0.11px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[246.3px]">Botas de invierno</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[73.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container19 />
    </div>
  );
}

function Del4() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.7px)] opacity-50 top-[66px] w-[41.89px]" data-name="Del">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-4.8px)] text-[#666] text-[18px] text-center top-0 whitespace-nowrap">
        <span className="leading-[28.8px]">S/</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[28.8px] line-through">{` 300`}</span>
      </p>
    </div>
  );
}

function Ins4() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.65px)] top-[66px] w-[43.98px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+11.35px)] text-[18px] text-black text-center top-0 w-[67px]">S/ 249</p>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component27 />
      <Container18 />
      <Del4 />
      <Ins4 />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute bg-white inset-[0_0_599.97px_0] overflow-clip" data-name="123">
      <Component26 />
      <Background15 />
    </div>
  );
}

function ChalierWarmWinterHeadbandForWomen() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Chalier Warm Winter Headband for Women">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChalierWarmWinterHeadbandForWomen} />
      </div>
    </div>
  );
}

function ParagraphBackgroundShadow3() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute bg-white drop-shadow-[0px_4px_5px_rgba(0,0,0,0.1)] h-[39.59px] left-1/2 rounded-[5px] text-[#da3f3f] text-center top-[375.4px] tracking-[0.3px] w-[182px]" data-name="Paragraph+Background+Shadow">
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-59.36px)] text-[13px] top-[9.8px] w-[33.279px]">288d</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%-35.28px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%-16.23px)] text-[13px] top-[9.8px] w-[23.166px]">16h</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+2.86px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+24.34px)] text-[13px] top-[9.8px] w-[28.017px]">52m</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[calc(50%+45.82px)] text-[16px] top-[calc(50%-0.3px)] w-[15.689px]">
        <p className="leading-[25.6px]">{` : `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:SemiBold',sans-serif] font-semibold h-[19px] leading-[24px] left-[calc(50%+64.82px)] text-[13px] top-[9.8px] w-[23.036px]">36s</p>
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-black h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.89px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.17px)] text-[11.2px] text-center text-white top-[1.35px] tracking-[0.3px] w-[24.042px]">-10%</p>
    </div>
  );
}

function Component28() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="608">
      <ChalierWarmWinterHeadbandForWomen />
      <ParagraphBackgroundShadow3 />
      <Background16 />
    </div>
  );
}

function Component29() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[283.34px]" data-name="609">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[23.8px] left-[calc(50%+0.1px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[283.54px]">Botas de invierno</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[73.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container21 />
    </div>
  );
}

function Del5() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-23.18px)] opacity-50 top-[66px] w-[42.3px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[28.8px] left-[calc(50%-7.82px)] line-through text-[#666] text-[18px] text-center top-[0.03px] w-[59px]">S/ 300</p>
    </div>
  );
}

function Ins5() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.85px)] top-[66px] w-[40.94px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-[calc(50%+11.65px)] text-[18px] text-black text-center top-[0.03px] w-[64px]">S/ 250</p>
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component29 />
      <Container20 />
      <Del5 />
      <Ins5 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute bg-white inset-[599.97px_0_0_0] overflow-clip" data-name="124">
      <Component28 />
      <Background17 />
    </div>
  );
}

function Group3Of1() {
  return (
    <div className="absolute bottom-px left-[715px] top-px w-[327px]" data-name="Group - 3 of 5">
      <Component13 />
      <Component14 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit} />
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit />
    </div>
  );
}

function Component31() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Bufanda polar</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container23 />
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component31 />
      <Container22 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 300</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute bg-white inset-[0_0_599.97px_0] overflow-clip" data-name="125">
      <Component30 />
      <Background18 />
    </div>
  );
}

function MahzaWomanSweaterAutumnAndWinter() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Mahza Woman Sweater Autumn And Winter">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMahzaWomanSweaterAutumnAndWinter} />
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="612">
      <MahzaWomanSweaterAutumnAndWinter />
    </div>
  );
}

function Component33() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[287.94px]" data-name="613">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.18px] leading-[23.8px] left-[calc(50%+0.1px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[288.14px]">Guantes térmicos</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[73.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container25 />
    </div>
  );
}

function Background19() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component33 />
      <Container24 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium leading-[28.8px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[66.03px] whitespace-nowrap">S/ 65</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute bg-white inset-[599.97px_0_0_0] overflow-clip" data-name="126">
      <Component32 />
      <Background19 />
    </div>
  );
}

function Group4Of1() {
  return (
    <div className="absolute bottom-px left-[1072px] top-px w-[327px]" data-name="Group - 4 of 5">
      <Component15 />
      <Component16 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[1171.94px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Group1Of1 />
      <Group2Of1 />
      <Group3Of1 />
      <Group4Of1 />
    </div>
  );
}

function Region1() {
  return (
    <div className="h-[1171.94px] relative shrink-0 w-full" data-name="Region">
      <Container9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] relative shrink-0 text-[34px] text-black text-center w-full">Productos Destacados</p>
      <Region1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[68px] items-start relative shrink-0 w-[1407px]">
      <Container />
      <Frame16 />
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-x-1/2 absolute h-[40.8px] left-[calc(50%+387.5px)] overflow-clip top-[432.83px] w-[475px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[40.8px] leading-[40.8px] left-[calc(50%-207.42px)] text-[34px] text-black text-center top-0 tracking-[0.3px] w-[55.539px]">797</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[calc(50%-157.26px)] lowercase text-[18px] text-black text-center top-[11.39px] tracking-[0.3px] w-[35.507px]">dias</p>
      <div className="-translate-y-1/2 absolute bg-black right-[357px] rounded-[2px] size-[4px] top-[calc(50%-0.01px)]" data-name="Background" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[40.8px] leading-[40.8px] left-[calc(50%-82.91px)] text-[34px] text-black text-center top-0 tracking-[0.3px] w-[36.62px]">01</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[18px] left-[calc(50%-39px)] lowercase text-[18px] text-black text-center top-[11px] tracking-[0.3px] whitespace-nowrap">horas</p>
      <div className="-translate-y-1/2 absolute bg-black right-[232px] rounded-[2px] size-[4px] top-[calc(50%-0.01px)]" data-name="Background" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[40.8px] leading-[40.8px] left-[calc(50%+41.84px)] text-[34px] text-black text-center top-0 tracking-[0.3px] w-[39.178px]">07</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[calc(50%+84.58px)] lowercase text-[18px] text-black text-center top-[11.39px] tracking-[0.3px] w-[36.941px]">Min</p>
      <div className="-translate-y-1/2 absolute bg-black right-[107px] rounded-[2px] size-[4px] top-[calc(50%-0.01px)]" data-name="Background" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[40.8px] leading-[40.8px] left-[calc(50%+168.36px)] text-[34px] text-black text-center top-0 tracking-[0.3px] w-[38.597px]">47</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[calc(50%+209.29px)] lowercase text-[18px] text-black text-center top-[11.39px] tracking-[0.3px] w-[33.892px]">seg</p>
    </div>
  );
}

function Component48() {
  return (
    <div className="absolute border border-black border-solid h-[50.39px] left-[865px] rounded-[5px] top-[500.83px] w-[179.91px]" data-name="714">
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[32.4px] left-[calc(50%+0.2px)] text-[18px] text-black text-center top-[11px] tracking-[0.3px] w-[126.305px]">Ver colección</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-x-1/2 absolute h-[680px] left-1/2 top-0 w-[1430px]" data-name="Container">
      <div className="absolute inset-[339.5px_564.86px_339.5px_0]" data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[865px] text-[18px] text-black top-[176.83px] tracking-[0.3px] w-[180px]">Oferta de la Semana</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[54px] leading-[54px] left-[865px] text-[54px] text-black top-[229.83px] w-[721px]">Diseñado para los más pequeños</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[865px] text-[#333] text-[18px] top-[358.83px] tracking-[0.3px] w-[455.467px]">Descubre nuestras prendas más abrigadoras para que niños y niñas disfruten del invierno con comodidad y estilo.</p>
      <Container27 />
      <Component48 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[680px] relative shrink-0 w-full" data-name="Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OptimizedImage alt="" className="absolute h-[100.89%] left-0 max-w-none top-[-0.45%] w-full" src={imgSection} />
      </div>
      <Container26 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[208px] items-center relative shrink-0 w-full">
      <Frame21 />
      <Section1 />
    </div>
  );
}

function Component35() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[705px] left-1/2 overflow-clip rounded-[5px] top-1/2 w-[682px]" data-name="696">
      <div className="absolute h-[714px] left-0 top-0 w-[690px]" data-name="image 13">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[705px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component35 />
    </div>
  );
}

function Background20() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[50px] h-[45px] left-1/2 rounded-[5px] w-[122.61px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.15px)] text-[18px] text-black text-center top-[9px] tracking-[0.3px] w-[68.916px]">Casacas</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[705px] left-0 overflow-clip right-[718px] top-0" data-name="Container">
      <Container29 />
      <Background20 />
    </div>
  );
}

function Component36() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-1/2 overflow-clip top-1/2 w-[322px]" data-name="698">
      <div className="absolute h-[337px] left-0 top-0 w-[322px]" data-name="image 15">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component36 />
    </div>
  );
}

function Background21() {
  return <div className="-translate-x-1/2 absolute bg-white bottom-[23px] h-[45px] left-1/2 rounded-[5px] w-[164px]" data-name="Background" />;
}

function Container30() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-[363px] rounded-[5px] top-0" data-name="Container">
      <Container31 />
      <Background21 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[27px] left-[calc(50%+2.5px)] text-[18px] text-black text-center top-[272px] tracking-[0.3px] w-[183px]">Conjuntos térmicos</p>
    </div>
  );
}

function Component37() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-1/2 overflow-clip top-1/2 w-[322px]" data-name="700">
      <div className="absolute h-[337px] left-[0.5px] top-0 w-[322px]" data-name="image 14">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component37 />
    </div>
  );
}

function Background22() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[30px] h-[45px] left-1/2 rounded-[5px] w-[146px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.14px)] text-[18px] text-black text-center top-[9px] tracking-[0.3px] w-[71.229px]">Bufandas</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[337px] left-[357.5px] overflow-clip right-[5.5px] rounded-[5px] top-0" data-name="Container">
      <Container33 />
      <Background22 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute inset-[0_0_368px_715px]" data-name="Section">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Component38() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-1/2 top-1/2 w-[322px]" data-name="702">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img702} />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component38 />
    </div>
  );
}

function Background23() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[30px] h-[45px] left-1/2 rounded-[5px] w-[146px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-[10px] tracking-[0.3px] w-[86.193px]">Guantes</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-[363px] rounded-[5px] top-0" data-name="Container">
      <Container35 />
      <Background23 />
    </div>
  );
}

function Component39() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-[calc(50%+0.5px)] overflow-clip rounded-[5px] top-1/2 w-[322px]" data-name="704">
      <div className="absolute h-[337px] left-0 top-0 w-[322px]" data-name="image 16">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component39 />
    </div>
  );
}

function Background24() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[30px] h-[45px] left-1/2 rounded-[5px] w-[146px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.18px)] text-[18px] text-black text-center top-[9px] tracking-[0.3px] w-[52.55px]">{` Botas`}</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[337px] left-[357.5px] overflow-clip right-[5.5px] top-0" data-name="Container">
      <Container37 />
      <Background24 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute inset-[367px_0_1px_715px]" data-name="Section">
      <Container34 />
      <Container36 />
    </div>
  );
}

function TiposPrendasNinos() {
  return (
    <div className="h-[705px] relative shrink-0 w-[1400px]" data-name="Tipos prendas niños">
      <Container28 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[147px] items-center relative shrink-0 w-full">
      <Frame22 />
      <TiposPrendasNinos />
    </div>
  );
}

function LinenDressWithBackOpeningDress() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-0" data-name="Linen Dress With Back Opening Dress">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinenDressWithBackOpeningDress} />
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="706">
      <LinenDressWithBackOpeningDress />
    </div>
  );
}

function Component41() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[252.27px]" data-name="707">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[252.47px]">Casaca térmica infantil</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container40 />
    </div>
  );
}

function Background25() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component41 />
      <Container39 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[100px] w-[58px]">S/ 129</p>
    </div>
  );
}

function Group1Of3() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[327px]" data-name="Group - 1 of 6">
      <Component40 />
      <Background25 />
    </div>
  );
}

function WomenSolidPoloNeckCottonBlendWhiteTShirt() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-0" data-name="Women Solid Polo Neck Cotton Blend White T-Shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWomenSolidPoloNeckCottonBlendWhiteTShirt} />
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="708">
      <WomenSolidPoloNeckCottonBlendWhiteTShirt />
    </div>
  );
}

function Component43() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[250.69px]" data-name="709">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[250.88px]">Chompa de lana</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container42 />
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component43 />
      <Container41 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[100px] w-[56px]">S/ 69</p>
    </div>
  );
}

function Group2Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[358px] overflow-clip top-px w-[327px]" data-name="Group - 2 of 6">
      <Component42 />
      <Background26 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="40">
      <div className="absolute h-[436px] left-0 top-px w-[327px]" data-name="image 17">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="710">
      <Component6 />
      <Background27 />
    </div>
  );
}

function Component45() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[259.2px]" data-name="711">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.4px]">Conjunto polar</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container44 />
    </div>
  );
}

function Del6() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.7px)] opacity-50 top-[102.17px] w-[41.44px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.16px)] line-through text-[#777] text-[18px] text-center top-0 w-[41.766px]">$130</p>
    </div>
  );
}

function Ins6() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.41px)] top-[102.17px] w-[43.98px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+4.09px)] text-[18px] text-black text-center top-[-0.17px] w-[52px]">S/ 99</p>
    </div>
  );
}

function Background28() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component45 />
      <Container43 />
      <Del6 />
      <Ins6 />
    </div>
  );
}

function Group3Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[715px] overflow-clip top-px w-[327px]" data-name="Group - 3 of 6">
      <Component44 />
      <Background28 />
    </div>
  );
}

function WomensRibbedTurtleneckBaseLayerUnderShirts1() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-0" data-name="Womens Ribbed Turtleneck Base Layer Under Shirts">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWomensRibbedTurtleneckBaseLayerUnderShirts1} />
      </div>
    </div>
  );
}

function ParagraphBackground4() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[72px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] top-[calc(50%-8px)] w-[26.688px]">
        <p className="leading-[18px]">501</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.18px)] text-[11px] top-[23px] w-[27.413px]">DAYS</p>
    </div>
  );
}

function ParagraphBackground5() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[119px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] top-[calc(50%-8px)] w-[17.391px]">
        <p className="leading-[18px]">16</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.16px)] text-[11px] top-[23px] w-[21.275px]">HRS</p>
    </div>
  );
}

function ParagraphBackground6() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[166px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] top-[calc(50%-8px)] w-[19.222px]">
        <p className="leading-[18px]">50</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.16px)] text-[11px] top-[23px] w-[21.355px]">MIN</p>
    </div>
  );
}

function ParagraphBackground7() {
  return (
    <div className="[word-break:break-word] absolute bg-[#fef2f2] left-[213px] rounded-[5px] size-[42px] text-[#da3f3f] text-center top-[385px] tracking-[0.3px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] top-[calc(50%-8px)] w-[20.067px]">
        <p className="leading-[18px]">46</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal h-[11px] leading-[11px] left-[calc(50%+0.15px)] text-[11px] top-[23px] w-[20.842px]">SEC</p>
    </div>
  );
}

function Background29() {
  return (
    <div className="absolute bg-[#111] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="712">
      <WomensRibbedTurtleneckBaseLayerUnderShirts1 />
      <ParagraphBackground4 />
      <ParagraphBackground5 />
      <ParagraphBackground6 />
      <ParagraphBackground7 />
      <Background29 />
    </div>
  );
}

function Component47() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[256.69px]" data-name="713">
      <ul className="-translate-x-1/2 [word-break:break-word] absolute block font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[0] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[256.88px]">
        <li className="list-disc ms-[27px]">
          <span className="leading-[25.2px]">Botas para nieve</span>
        </li>
      </ul>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container46 />
    </div>
  );
}

function Del7() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-37.83px)] opacity-50 top-[102px] w-[41.34px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.33px)] line-through text-[#777] text-[18px] text-center top-0 w-[62px]">S/ 230</p>
    </div>
  );
}

function Ins7() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+15.57px)] top-[102px] w-[44.14px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+8.13px)] text-[18px] text-black text-center top-[-0.17px] w-[60px]">S/ 149</p>
    </div>
  );
}

function Background30() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component47 />
      <Container45 />
      <Del7 />
      <Ins7 />
    </div>
  );
}

function Group4Of3() {
  return (
    <div className="absolute bg-white bottom-px left-[1072px] overflow-clip top-px w-[327px]" data-name="Group - 4 of 6">
      <Component46 />
      <Background30 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[584.17px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Group1Of3 />
      <Group2Of3 />
      <Group3Of3 />
      <Group4Of3 />
    </div>
  );
}

function Region2() {
  return (
    <div className="h-[584.17px] relative shrink-0 w-full" data-name="Region">
      <Container38 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-[1400px]">
      <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] relative shrink-0 text-[34px] text-black text-center w-full">Productos más vendidos</p>
      <Region2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[99px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame17 />
    </div>
  );
}

function CmsBanner01Jpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 rounded-[5px] top-0 w-[685px]" data-name="cms-banner01.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCmsBanner01Jpg} />
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 top-0 w-[685px]" data-name="723">
      <CmsBanner01Jpg />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute inset-[0_715px_0_0] overflow-clip rounded-[5px]" data-name="Container">
      <Component57 />
    </div>
  );
}

function Component58() {
  return (
    <button className="absolute h-[16px] left-[67px] rounded-[5px] top-[233.66px] w-[74.02px] cursor-pointer transition-opacity duration-200 hover:opacity-75 border-0 bg-transparent p-0 text-left" data-name="724">
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute capitalize decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[calc(50%+21.49px)] text-[16px] text-black text-center top-0 tracking-[0.3px] underline w-[117px]">Comprar ahora</p>
    </button>
  );
}

function Heading() {
  return (
    <div className="absolute h-[75.59px] left-[67px] right-[1145.08px] top-[114.66px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[80px] leading-[37.8px] left-0 text-[30px] text-black top-[-2.58px] w-[325px]">Mantente cálido con nuestra nueva colección infantil.</p>
    </div>
  );
}

function CmsBanner02Jpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 rounded-[5px] top-0 w-[685px]" data-name="cms-banner02.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCmsBanner02Jpg} />
      </div>
    </div>
  );
}

function Component59() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 top-0 w-[685px]" data-name="725">
      <CmsBanner02Jpg />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute inset-[0_0_0_715px] overflow-clip rounded-[5px]" data-name="Container">
      <Component59 />
    </div>
  );
}

function Component60() {
  return (
    <button className="absolute h-[16px] left-[784px] rounded-[5px] top-[217.77px] w-[74.02px] cursor-pointer transition-opacity duration-200 hover:opacity-75 border-0 bg-transparent p-0 text-left" data-name="726">
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute capitalize decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[calc(50%+20.49px)] text-[16px] text-black text-center top-[-0.11px] tracking-[0.3px] underline w-[115px]">Comprar ahora</p>
    </button>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[75.59px] left-[782px] right-[417.92px] top-[121.24px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[80px] leading-[37.8px] left-0 text-[30px] text-black top-[-2.58px] w-[246px]">Descubre las últimas tendencias</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[319.06px] relative shrink-0 w-[1400px]" data-name="Section">
      <Container47 />
      <Component58 />
      <Heading />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[69px] text-[16px] text-black top-[86.14px] w-[96.399px]">Invierno 2026</p>
      <Container48 />
      <Component60 />
      <Heading1 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[784px] text-[16px] text-black top-[85.66px] w-[185px]">Hasta 25% de descuento</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[59px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Section4 />
    </div>
  );
}

function Component61() {
  return (
    <button className="absolute border border-black border-solid h-[46.8px] left-0 rounded-[5px] top-[220.59px] w-[130.7px] cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white group bg-transparent p-0" data-name="727">
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-['Jost:Regular',sans-serif] font-normal h-[28.8px] leading-[28.8px] left-[calc(50%+0.16px)] text-[16px] text-black group-hover:text-white text-center top-[8px] tracking-[0.3px] w-[77.018px] transition-colors duration-200">read more</p>
    </button>
  );
}

function Container51() {
  return (
    <div className="absolute h-[70px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#ffab00] text-[20px] top-0 w-[100.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[20px] left-[30px] overflow-clip top-[45px] w-[100px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#e5e5e5] text-[20px] top-0 w-[100.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container51 />
    </div>
  );
}

function Testi1Jpg() {
  return (
    <div className="absolute left-[30px] rounded-[100px] size-[80px] top-[196.56px]" data-name="testi_1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTesti1Jpg} />
      </div>
    </div>
  );
}

function Group1Of() {
  return (
    <div className="absolute bg-white h-[321.56px] left-[15px] right-[753.67px] rounded-[5px] top-0" data-name="Group - 1 of 4">
      <Container50 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[273.23px]">“ Las casacas son muy cómodas y mantienen a mis hijos abrigados.”</p>
      <Testi1Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[83.959px]">Felicity Q.</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[29px] leading-[28.8px] left-[135px] text-[#777] text-[16px] top-[238.59px] tracking-[0.3px] w-[142px]">- Compra verificada</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[70px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#ffab00] text-[20px] top-0 w-[100.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[20px] left-[30px] overflow-clip top-[45px] w-[100px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#e5e5e5] text-[20px] top-0 w-[100.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container53 />
    </div>
  );
}

function Testi2Jpg() {
  return (
    <div className="absolute left-[30px] rounded-[100px] size-[80px] top-[196.56px]" data-name="testi_2.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTesti2Jpg} />
      </div>
    </div>
  );
}

function Group2Of() {
  return (
    <div className="absolute bg-white h-[321.56px] left-[384.33px] right-[384.34px] rounded-[5px] top-0" data-name="Group - 2 of 4">
      <Container52 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[273.93px]">{`" Excelente calidad y diseños muy bonitos."`}</p>
      <Testi2Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[95.267px]">Stevin Josh.</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[28.8px] left-[134.67px] text-[#777] text-[16px] top-[238.59px] tracking-[0.3px] whitespace-nowrap">- Cliente verificado</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[70px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#ffab00] text-[20px] top-0 w-[100.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-[30px] overflow-clip top-[45px] w-[100px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[20px] leading-[20px] left-0 not-italic text-[#e5e5e5] text-[20px] top-0 w-[100.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container55 />
    </div>
  );
}

function Testi3Jpg() {
  return (
    <div className="absolute left-[30px] rounded-[100px] size-[80px] top-[196.56px]" data-name="testi_3.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTesti3Jpg} />
      </div>
    </div>
  );
}

function Group3Of() {
  return (
    <div className="absolute bg-white h-[321.56px] left-[753.66px] right-[15.01px] rounded-[5px] top-0" data-name="Group - 3 of 4">
      <Container54 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[264.71px]">{`" Las botas resistieron perfectamente los días más fríos."`}</p>
      <Testi3Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[108.117px]">Rhodes jhon.</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[29px] leading-[28.8px] left-[135.34px] text-[#777] text-[16px] top-[238.59px] tracking-[0.3px] w-[135px]">- Cliente frecuente</p>
    </div>
  );
}

function Group4Of() {
  return <div className="absolute bg-white h-[321.56px] left-[1122.98px] right-[-354.31px] rounded-[5px] top-0" data-name="Group - 4 of 4" />;
}

function Container49() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <Group1Of />
      <Group2Of />
      <Group3Of />
      <Group4Of />
    </div>
  );
}

function Region3() {
  return (
    <div className="absolute h-[321.56px] left-[307px] right-[-15px] top-0" data-name="Region">
      <Container49 />
    </div>
  );
}

function Section6() {
  return (
    <div className="-translate-x-1/2 absolute h-[321.56px] left-1/2 top-[95px] w-[1400px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] left-0 text-[34px] text-black top-[30.59px] w-[289px]">Opiniones de Nuestros Clientes</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[79px] leading-[28px] left-0 text-[#777] text-[16px] top-[110.59px] tracking-[0.3px] w-[251.51px]">Mantén a los más pequeños cálidos, cómodos y protegidos este invierno.</p>
      <Component61 />
      <Region3 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#f7f7f7] h-[511.56px] relative shrink-0 w-full" data-name="Section">
      <Section6 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[99px] items-start left-0 top-[964px] w-[1920px]">
      <Frame25 />
      <Section5 />
    </div>
  );
}


function Component() {
  return (
    <div className="bg-white h-[6837px] relative shrink-0 w-full" data-name="10">
      <Frame20 />
      <ProductosDestacados />
      <Frame26 />
      <Footer absoluteTop={6326} />
    </div>
  );
}

export default function OffersPage() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full">
      <Frame14 />
      <Component />
    </div>
  );
}
