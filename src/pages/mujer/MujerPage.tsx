import { OptimizedImage } from "@/app/components/OptimizedImage";
import svgPaths from "./svgPaths";
import { ASSETS } from "@/config/assets";
import { navigateTo } from "@/app/navigation";

const imgRectangle143 = ASSETS.mujer.imgRectangle143;
const img68 = ASSETS.mujer.img68;
const img42 = ASSETS.mujer.img42;
const imgWomensRibbedTurtleneckBaseLayerUnderShirts = ASSETS.mujer.imgWomensRibbedTurtleneckBaseLayerUnderShirts;
const imgAdagroWomensTShirtsTurtleNeckSlimFitTee = ASSETS.mujer.imgAdagroWomensTShirtsTurtleNeckSlimFitTee;
const imgTommyHilfigerWomensKnitSheathDress = ASSETS.mujer.imgTommyHilfigerWomensKnitSheathDress;
const imgOddCoolSleeveVentCollarKnit = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit;
const imgOddCoolSleeveVentCollarKnit1 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit1;
const imgOddCoolSleeveVentCollarKnit2 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit2;
const imgOddCoolSleeveVentCollarKnit3 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit3;
const imgOddCoolSleeveVentCollarKnit4 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit4;
const imgOddCoolSleeveVentCollarKnit5 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit5;
const imgOddCoolSleeveVentCollarKnit6 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit6;
const imgOddCoolSleeveVentCollarKnit7 = ASSETS.mujer.imgOddCoolSleeveVentCollarKnit7;
const imgSection = ASSETS.mujer.imgSection;
const imgImage13 = ASSETS.mujer.imgImage13;
const imgImage15 = ASSETS.mujer.imgImage15;
const imgImage14 = ASSETS.mujer.imgImage14;
const img702 = ASSETS.mujer.img702;
const imgImage16 = ASSETS.mujer.imgImage16;
const imgLinenDressWithBackOpeningDress = ASSETS.mujer.imgLinenDressWithBackOpeningDress;
const imgWomenSolidPoloNeckCottonBlendWhiteTShirt = ASSETS.mujer.imgWomenSolidPoloNeckCottonBlendWhiteTShirt;
const imgImage17 = ASSETS.mujer.imgImage17;
const imgWomensRibbedTurtleneckBaseLayerUnderShirts1 = ASSETS.mujer.imgWomensRibbedTurtleneckBaseLayerUnderShirts1;
const imgCmsBanner01Jpg = ASSETS.mujer.imgCmsBanner01Jpg;
const imgCmsBanner02Jpg = ASSETS.mujer.imgCmsBanner02Jpg;
const imgTesti1Jpg = ASSETS.mujer.imgTesti1Jpg;
const imgTesti2Jpg = ASSETS.mujer.imgTesti2Jpg;
const imgTesti3Jpg = ASSETS.mujer.imgTesti3Jpg;
const imgRectangle114 = ASSETS.mujer.imgRectangle114;

function Label() {
  return (
    <div className="absolute h-[51px] left-0 top-[2px] w-[320.19px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51px] leading-[28px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[320.39px]">Recibe novedades, promociones y lanzamientos de nuestra colección de invierno.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[23px] left-[15px] overflow-clip right-[50px] top-[13.5px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-0 text-[#555] text-[16px] top-0 tracking-[0.3px] w-[133.884px]">Tu correo electrónico</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[50px] left-0 overflow-clip right-0 rounded-[5px] top-[106px]" data-name="Input">
      <Container />
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

function Component55() {
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

function Component56() {
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0391 17.5586">
              <path d={svgPaths.p15bb5100} fill="var(--fill-0, #AAAAAA)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Component55 />
      <Icon2 />
      <Component56 />
    </div>
  );
}

function Component57() {
  return (
    <div className="absolute h-[23px] left-0 top-[2px] w-[64.33px]" data-name="759">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[113px]">Sobre Nosotros</p>
    </div>
  );
}

function Component58() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[95.91px]" data-name="760">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[134px]">Nuestra Colección</p>
    </div>
  );
}

function Component59() {
  return (
    <div className="absolute h-[23px] left-0 top-[69.59px] w-[54.42px]" data-name="761">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.41px] tracking-[0.3px] w-[178px]">Preguntas Frecuentes</p>
    </div>
  );
}

function Component60() {
  return (
    <div className="absolute h-[23px] left-0 top-[103.39px] w-[91.91px]" data-name="762">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[92.252px]">Contáctanos</p>
    </div>
  );
}

function Component61() {
  return <div className="absolute h-[23px] left-0 top-[137.19px] w-[75.39px]" data-name="763" />;
}

function List() {
  return (
    <div className="absolute h-[163.98px] left-0 right-0 top-[61px]" data-name="List">
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
      <Component61 />
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

function Component62() {
  return (
    <div className="absolute h-[23px] left-0 top-[2px] w-[85.75px]" data-name="764">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[170px]">Términos y Condiciones</p>
    </div>
  );
}

function Component63() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[67.03px]" data-name="765">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[170px]">Política de Privacidad</p>
    </div>
  );
}

function Component64() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[70px] w-[107px]" data-name="766">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[107px]">Guía de Tallas</p>
    </div>
  );
}

function Component65() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[103px] w-[115px]" data-name="767">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[180px]">Cambios y Devoluciones</p>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[163.98px] left-0 right-0 top-[61px]" data-name="List">
      <Component62 />
      <Component63 />
      <Component64 />
      <Component65 />
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

function Component66() {
  return <div className="absolute h-[23px] left-[605.17px] top-[395.98px] w-[54.88px]" data-name="769" />;
}

function Component2() {
  return (
    <div className="absolute h-[25px] right-[260px] top-[395.98px] w-[282px]" data-name="68">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img68} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111] h-[510.98px] relative shrink-0 w-full" data-name="Footer">
      <HorizontalBorder />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[260px] text-[#aaa] text-[16px] top-[396.17px] tracking-[0.3px] w-[427px]">© 2026 Mundo Polar — Todos los derechos reservados.</p>
      <Component66 />
      <Component2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start p-[10px] relative shrink-0">
      <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[34px] relative shrink-0 text-[34px] text-black text-center w-[1402px]">Ofertas especiales</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-0" data-name="42">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-[-4.65%] max-w-none size-[108.74%] top-[0.03%]" src={img42} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component42() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="715">
      <Component1 />
      <Background />
    </div>
  );
}

function Component43() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[259.2px]" data-name="716">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.4px]">Botas altas</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container3 />
    </div>
  );
}

function Del() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.7px)] opacity-50 top-[102.17px] w-[41.44px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%-6.8px)] line-through text-[#777] text-[18px] text-center top-[-0.34px] w-[58px]">S/ 200</p>
    </div>
  );
}

function Ins() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.41px)] top-[102.17px] w-[43.98px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+7.59px)] text-[18px] text-black text-center top-[-0.34px] w-[59px]">S/ 90</p>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component43 />
      <Container2 />
      <Del />
      <Ins />
    </div>
  );
}

function Group1Of1() {
  return (
    <div className="bg-white h-[582.17px] overflow-clip relative shrink-0 w-[327px]" data-name="Group - 1 of 6">
      <Component42 />
      <Background1 />
    </div>
  );
}

function WomensRibbedTurtleneckBaseLayerUnderShirts() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-[-0.17px]" data-name="Womens Ribbed Turtleneck Base Layer Under Shirts">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[99.95%] left-[-0.13%] max-w-none top-0 w-[99.91%]" src={imgWomensRibbedTurtleneckBaseLayerUnderShirts} />
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
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component44() {
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

function Component45() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[256.69px]" data-name="718">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[256.88px]">Conjunto invierno chic</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container5 />
    </div>
  );
}

function Del1() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.78px)] opacity-50 top-[102.17px] w-[41.34px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%-7.72px)] line-through text-[#777] text-[18px] text-center top-[-0.34px] w-[58px]">S/ 400</p>
    </div>
  );
}

function Ins1() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.37px)] top-[102.17px] w-[44.14px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+6.63px)] text-[18px] text-black text-center top-[-0.34px] w-[77px]">S/ 210</p>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component45 />
      <Container4 />
      <Del1 />
      <Ins1 />
    </div>
  );
}

function Group2Of1() {
  return (
    <div className="bg-white h-[582.17px] overflow-clip relative shrink-0 w-[327px]" data-name="Group - 2 of 6">
      <Component44 />
      <Background3 />
    </div>
  );
}

function AdagroWomensTShirtsTurtleNeckSlimFitTee() {
  return (
    <div className="absolute h-[437px] left-0 right-0 rounded-[5px] top-[-0.17px]" data-name="Adagro Womens T-shirts Turtle Neck Slim Fit Tee">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-[0.08%] max-w-none size-[99.97%] top-[0.03%]" src={imgAdagroWomensTShirtsTurtleNeckSlimFitTee} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.89px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.17px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[24.042px]">-10%</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="719">
      <AdagroWomensTShirtsTurtleNeckSlimFitTee />
      <Background4 />
    </div>
  );
}

function Component47() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[286.13px]" data-name="720">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[286.32px]">Guantes polar</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[74.17px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container7 />
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
      <Component47 />
      <Container6 />
      <Del2 />
      <Ins2 />
    </div>
  );
}

function Group3Of1() {
  return (
    <div className="bg-white h-[582.17px] overflow-clip relative shrink-0 w-[327px]" data-name="Group - 3 of 6">
      <Component46 />
      <Background5 />
    </div>
  );
}

function TommyHilfigerWomensKnitSheathDress() {
  return (
    <div className="absolute h-[421px] left-[6px] right-0 rounded-[5px] top-[7.83px]" data-name="Tommy Hilfiger Women's Knit Sheath Dress">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[99.97%] left-[0.1%] max-w-none top-[-0.04%] w-[98.13%]" src={imgTommyHilfigerWomensKnitSheathDress} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.63px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.17px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.78px]">-16%</p>
    </div>
  );
}

function Component48() {
  return (
    <div className="absolute h-[452px] left-0 overflow-clip right-[-15px] top-[-0.17px]" data-name="721">
      <TommyHilfigerWomensKnitSheathDress />
      <Background6 />
    </div>
  );
}

function Component49() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[289.98px]" data-name="722">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[290.18px]">Chaleco acolchado</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
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

function Background7() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component49 />
      <Container8 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[102.83px] w-[128px]">S/ 49 – S/ 58</p>
    </div>
  );
}

function Group4Of1() {
  return (
    <div className="bg-white h-[582.17px] overflow-clip relative shrink-0 w-[327px]" data-name="Group - 4 of 6">
      <Component48 />
      <Background7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start overflow-clip p-px relative shrink-0" data-name="Container">
      <Group1Of1 />
      <Group2Of1 />
      <Group3Of1 />
      <Group4Of1 />
    </div>
  );
}

function Region() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Region">
      <Container1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-[1920px]">
      <Frame22 />
      <Region />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal leading-[34px] relative shrink-0 text-[34px] text-black text-center w-[1402px]">Productos Destacados</p>
      </div>
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

function Component11() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit />
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Guantes de Invierno</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container11 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component12 />
      <Container10 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 50</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="125">
      <Component11 />
      <Background8 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit1() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit1} />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit1 />
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Botas polares</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
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

function Background9() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component14 />
      <Container12 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 100</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="223">
      <Component13 />
      <Background9 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit2() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit2} />
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit2 />
    </div>
  );
}

function Component16() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">{`Casaca Invierno `}</p>
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

function Background10() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component16 />
      <Container14 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 160</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="224">
      <Component15 />
      <Background10 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit3() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit3} />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit3 />
    </div>
  );
}

function Component18() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Conjunto Polar</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container17 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component18 />
      <Container16 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 300</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="225">
      <Component17 />
      <Background11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Component3 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit4() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit4} />
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit4 />
    </div>
  );
}

function Component20() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Winter Ear Muffs</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container19 />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component20 />
      <Container18 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 60</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="125">
      <Component19 />
      <Background12 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit5() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit5} />
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit5 />
    </div>
  );
}

function Component22() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Winter Ear Muffs</p>
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
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container21 />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component22 />
      <Container20 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 60</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="223">
      <Component21 />
      <Background13 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit6() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit6} />
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit6 />
    </div>
  );
}

function Component24() {
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

function Background14() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component24 />
      <Container22 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 300</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="224">
      <Component23 />
      <Background14 />
    </div>
  );
}

function OddCoolSleeveVentCollarKnit7() {
  return (
    <div className="absolute h-[425px] left-0 right-0 rounded-[5px] top-0" data-name="Odd Cool Sleeve Vent Collar Knit">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOddCoolSleeveVentCollarKnit7} />
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute h-[425px] left-0 overflow-clip right-0 top-0" data-name="610">
      <OddCoolSleeveVentCollarKnit7 />
    </div>
  );
}

function Component26() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[264.03px]" data-name="611">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[23.8px] left-[calc(50%+0.15px)] text-[17px] text-black text-center top-0 tracking-[0.3px] w-[264.333px]">Bufanda polar</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[63px] left-0 overflow-clip right-[20%] top-0" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+9.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE901\uE901\uE901\uE901\uE901`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-x-1/2 absolute h-[18px] left-1/2 overflow-clip top-[47.98px] w-[90px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['STAR7:Regular',sans-serif] h-[18px] leading-[18px] left-[calc(50%+0.1px)] not-italic text-[#ffab00] text-[18px] text-center top-0 w-[90.2px]">{`\uE900\uE900\uE900\uE900\uE900`}</p>
      <Container25 />
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-white inset-[425px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component26 />
      <Container24 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[28.8px] left-1/2 text-[18px] text-black text-center top-[66px] w-[67px]">S/ 300</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white h-[569.97px] overflow-clip relative shrink-0 w-[327px]" data-name="225">
      <Component25 />
      <Background15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Component4 />
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-end relative shrink-0 w-[1428px]">
      <Frame25 />
      <Frame8 />
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

function Component41() {
  return (
    <div className="absolute border border-black border-solid h-[50.39px] left-[865px] rounded-[5px] top-[500.83px] w-[179.91px]" data-name="714">
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[32.4px] left-[calc(50%+0.2px)] text-[18px] text-black text-center top-[11px] tracking-[0.3px] w-[126.305px]">Ver colección</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[680px] relative shrink-0 w-[1430px]" data-name="Container">
      <div className="absolute inset-[339.5px_564.86px_339.5px_0]" data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[18px] leading-[18px] left-[865px] text-[18px] text-black top-[176.83px] tracking-[0.3px] w-[180px]">Oferta de la Semana</p>
      <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[54px] leading-[0] left-[865px] not-italic text-[#110101] text-[55px] top-[211.83px] tracking-[-1.8px] w-[721px] whitespace-pre-wrap">
        <p className="leading-[72px] mb-0">{`Abrígate con estilo `}</p>
        <p className="leading-[72px]">para ella!</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[25px] leading-[18px] left-[865px] text-[#333] text-[18px] top-[358.83px] tracking-[0.3px] w-[455px]">Descubre prendas diseñadas para acompañarte con estilo y comodidad en cada momento.</p>
      <Container27 />
      <Component41 />
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OptimizedImage alt="" className="absolute h-[130.24%] left-[-29.02%] max-w-none top-[0.03%] w-[129.08%]" src={imgSection} />
      </div>
      <div className="content-stretch flex flex-col items-start px-[245px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[705px] left-[calc(50%+3px)] overflow-clip rounded-[5px] top-1/2 w-[682px]" data-name="696">
      <div className="absolute h-[714px] left-0 top-0 w-[690px]" data-name="image 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <OptimizedImage alt="" className="absolute h-full left-[5.11%] max-w-none top-[0.02%] w-[155.35%]" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[705px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component28 />
    </div>
  );
}

function Background16() {
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
      <Background16 />
    </div>
  );
}

function Component29() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-1/2 overflow-clip top-1/2 w-[322px]" data-name="698">
      <div className="absolute h-[337px] left-0 top-0 w-[322px]" data-name="image 15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <OptimizedImage alt="" className="absolute h-[169.86%] left-[0.02%] max-w-none top-[-19.2%] w-full" src={imgImage15} />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component29 />
    </div>
  );
}

function Background17() {
  return <div className="-translate-x-1/2 absolute bg-white bottom-[23px] h-[45px] left-1/2 rounded-[5px] w-[164px]" data-name="Background" />;
}

function Container30() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-[363px] rounded-[5px] top-0" data-name="Container">
      <Container31 />
      <Background17 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[27px] left-[calc(50%+2.5px)] text-[18px] text-black text-center top-[272px] tracking-[0.3px] w-[183px]">Conjuntos térmicos</p>
    </div>
  );
}

function Component30() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[337px] left-1/2 overflow-clip top-1/2 w-[322px]" data-name="700">
      <div className="absolute h-[337px] left-[0.5px] top-0 w-[322px]" data-name="image 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <OptimizedImage alt="" className="absolute h-full left-[-4.36%] max-w-none top-[-0.14%] w-[156.99%]" src={imgImage14} />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[337px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="Container">
      <Component30 />
    </div>
  );
}

function Background18() {
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
      <Background18 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute inset-[0_0_368px_715px]" data-name="Section">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Component31() {
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
      <Component31 />
    </div>
  );
}

function Background19() {
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
      <Background19 />
    </div>
  );
}

function Component32() {
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
      <Component32 />
    </div>
  );
}

function Background20() {
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
      <Background20 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute inset-[367px_0_1px_715px]" data-name="Section">
      <Container34 />
      <Container36 />
    </div>
  );
}

function Section5() {
  return (
    <div className="h-[705px] relative shrink-0 w-full" data-name="Section">
      <Container28 />
      <Section6 />
      <Section7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Section5 />
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

function Component33() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="706">
      <LinenDressWithBackOpeningDress />
    </div>
  );
}

function Component34() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-1/2 overflow-clip top-[15px] w-[252.27px]" data-name="707">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[252.47px]">Chaqueta Elegance Beige</p>
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

function Background21() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component34 />
      <Container39 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[100px] w-[58px]">S/ 129</p>
    </div>
  );
}

function Group1Of2() {
  return (
    <div className="absolute bg-white bottom-px left-px overflow-clip top-px w-[327px]" data-name="Group - 1 of 6">
      <Component33 />
      <Background21 />
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

function Component35() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="708">
      <WomenSolidPoloNeckCottonBlendWhiteTShirt />
    </div>
  );
}

function Component36() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[250.69px]" data-name="709">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[250.88px]">Chaqueta Elegance Marrón</p>
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

function Background22() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component36 />
      <Container41 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+0.5px)] text-[18px] text-black text-center top-[100px] w-[56px]">S/ 69</p>
    </div>
  );
}

function Group2Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[358px] overflow-clip top-px w-[327px]" data-name="Group - 2 of 6">
      <Component35 />
      <Background22 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 rounded-[5px] top-0" data-name="40">
      <div className="absolute h-[436px] left-0 top-px w-[327px]" data-name="image 17">
        <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component37() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="710">
      <Component />
      <Background23 />
    </div>
  );
}

function Component38() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%-0.01px)] overflow-clip top-[15px] w-[259.2px]" data-name="711">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[259.4px]">Abrigo Classic Camel</p>
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

function Del3() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-24.7px)] opacity-50 top-[102.17px] w-[41.44px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.16px)] line-through text-[#777] text-[18px] text-center top-0 w-[41.766px]">$130</p>
    </div>
  );
}

function Ins3() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+23.41px)] top-[102.17px] w-[43.98px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+4.09px)] text-[18px] text-black text-center top-[-0.17px] w-[52px]">S/ 99</p>
    </div>
  );
}

function Background24() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component38 />
      <Container43 />
      <Del3 />
      <Ins3 />
    </div>
  );
}

function Group3Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[715px] overflow-clip top-px w-[327px]" data-name="Group - 3 of 6">
      <Component37 />
      <Background24 />
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

function Background25() {
  return (
    <div className="absolute bg-[#ff3b30] h-[20.16px] left-[6px] rounded-[4px] top-[6px] w-[34.05px]" data-name="Background">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[13.44px] left-[calc(50%+0.16px)] text-[11.2px] text-center text-white top-[1.36px] tracking-[0.3px] w-[23.197px]">-17%</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="absolute h-[437px] left-0 overflow-clip right-0 top-0" data-name="712">
      <WomensRibbedTurtleneckBaseLayerUnderShirts1 />
      <ParagraphBackground4 />
      <ParagraphBackground5 />
      <ParagraphBackground6 />
      <ParagraphBackground7 />
      <Background25 />
    </div>
  );
}

function Component40() {
  return (
    <div className="-translate-x-1/2 absolute h-[51.19px] left-[calc(50%+0.01px)] overflow-clip top-[15px] w-[256.69px]" data-name="713">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51.19px] leading-[25.2px] left-[calc(50%+0.1px)] text-[18px] text-black text-center top-0 tracking-[0.3px] w-[256.88px]">Chaqueta Soft Fur Chocolate</p>
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

function Del4() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%-37.83px)] opacity-50 top-[102px] w-[41.34px]" data-name="Del">
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[27px] left-[calc(50%+0.33px)] line-through text-[#777] text-[18px] text-center top-0 w-[62px]">S/ 230</p>
    </div>
  );
}

function Ins4() {
  return (
    <div className="-translate-x-1/2 absolute h-[26px] left-[calc(50%+15.57px)] top-[102px] w-[44.14px]" data-name="Ins">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[27px] left-[calc(50%+8.13px)] text-[18px] text-black text-center top-[-0.17px] w-[60px]">S/ 149</p>
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute bg-white inset-[437px_0_0_0] rounded-bl-[4px] rounded-br-[4px]" data-name="Background">
      <Component40 />
      <Container45 />
      <Del4 />
      <Ins4 />
    </div>
  );
}

function Group4Of2() {
  return (
    <div className="absolute bg-white bottom-px left-[1072px] overflow-clip top-px w-[327px]" data-name="Group - 4 of 6">
      <Component39 />
      <Background26 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[584.17px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Group1Of2 />
      <Group2Of2 />
      <Group3Of2 />
      <Group4Of2 />
    </div>
  );
}

function Region1() {
  return (
    <div className="h-[584.17px] relative shrink-0 w-[1406px]" data-name="Region">
      <Container38 />
    </div>
  );
}

function Section8() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] relative shrink-0 text-[34px] text-black text-center w-[359px]">Productos más vendidos</p>
      <Region1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[93px] items-start relative shrink-0 w-[1406px]">
      <Frame />
      <Section8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[113px] items-center relative shrink-0 w-full">
      <Section4 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[55px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function CmsBanner01Jpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[319px] left-1/2 rounded-[5px] top-[-0.34px] w-[685px]" data-name="cms-banner01.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[139.44%] left-[-0.12%] max-w-none top-[0.06%] w-[139.41%]" src={imgCmsBanner01Jpg} />
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 top-0 w-[685px]" data-name="723">
      <CmsBanner01Jpg />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[319.06px] overflow-clip relative rounded-[5px] shrink-0 w-[685px]" data-name="Container">
      <Component50 />
    </div>
  );
}

function CmsBanner02Jpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[319px] left-1/2 rounded-[5px] top-[-0.34px] w-[685px]" data-name="cms-banner02.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
        <OptimizedImage alt="" className="absolute h-[100.02%] left-0 max-w-none top-[0.11%] w-full" src={imgCmsBanner02Jpg} />
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="-translate-x-1/2 absolute h-[319.06px] left-1/2 top-0 w-[685px]" data-name="725">
      <CmsBanner02Jpg />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[319.06px] overflow-clip relative rounded-[5px] shrink-0 w-[685px]" data-name="Container">
      <Component52 />
    </div>
  );
}

function Component51() {
  return (
    <div className="absolute h-[16px] left-[67px] rounded-[5px] top-[233.66px] w-[74.02px]" data-name="724">
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute capitalize decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[calc(50%+21.49px)] text-[16px] text-center text-white top-0 tracking-[0.3px] underline w-[117px]">Comprar ahora</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[75.59px] left-[67px] right-[1145.08px] top-[114.66px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[80px] leading-[37.8px] left-0 text-[30px] text-white top-[-29px] w-[354px]">Moda, comodidad y elegancia en una colección pensada para ti.</p>
    </div>
  );
}

function Component53() {
  return (
    <div className="absolute h-[16px] left-[784px] rounded-[5px] top-[217.77px] w-[74.02px]" data-name="726">
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute capitalize decoration-from-font decoration-solid font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[calc(50%+20.49px)] text-[16px] text-center text-white top-[-0.11px] tracking-[0.3px] underline w-[115px]">Comprar ahora</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[75.59px] left-[782px] right-[417.92px] top-[121.23px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[80px] leading-[37.8px] left-0 text-[30px] text-white top-[-2.58px] w-[246px]">Descubre las últimas tendencias</p>
    </div>
  );
}

function Section9() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="Section">
      <Container47 />
      <Container48 />
      <Component51 />
      <Heading />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[69px] text-[16px] text-black top-[86.14px] w-[96.399px]">Invierno 2026</p>
      <Component53 />
      <Heading1 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[16px] leading-[16px] left-[784px] text-[16px] text-black top-[85.66px] w-[185px]">Hasta 25% de descuento</p>
    </div>
  );
}

function Component54() {
  return (
    <div className="absolute border border-black border-solid h-[46.8px] left-0 rounded-[5px] top-[220.59px] w-[130.7px]" data-name="727">
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-['Jost:Regular',sans-serif] font-normal h-[28.8px] leading-[28.8px] left-[calc(50%+0.16px)] text-[16px] text-black text-center top-[8px] tracking-[0.3px] w-[77.018px]">Leer Más</p>
    </div>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[273.23px]">{`"La calidad superó mis expectativas. La ropa es cómoda y queda exactamente como esperaba."`}</p>
      <Testi1Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[83.959px]">Amelia R.</p>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[273.93px]">{`"Me encantó la atención y el envío fue rápido. Definitivamente volveré a comprar."`}</p>
      <Testi2Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[95.267px]">Roxana T.</p>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[77.37px] leading-[27.2px] left-[30px] text-[#777] text-[16px] top-[92px] tracking-[0.3px] w-[264.71px]">{`"Encontré prendas hermosas para el día a día. La tela es muy buena y los acabados también."`}</p>
      <Testi3Jpg />
      <p className="[word-break:break-word] absolute capitalize font-['Jost:Medium',sans-serif] font-medium h-[26px] leading-[32.4px] left-[135.11px] text-[18px] text-black top-[208.97px] tracking-[0.3px] w-[108.117px]">Hana M.</p>
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

function Region2() {
  return (
    <div className="absolute h-[321.56px] left-[307px] right-[-15px] top-0" data-name="Region">
      <Container49 />
    </div>
  );
}

function Section11() {
  return (
    <div className="h-[321.56px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[34px] leading-[34px] left-0 text-[34px] text-black top-[30.59px] w-[289px]">Opiniones de Nuestros Clientes</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[79px] leading-[28px] left-0 text-[#777] text-[16px] top-[110.59px] tracking-[0.3px] w-[251.51px]">Porque tu mejor accesorio es la confianza.</p>
      <Component54 />
      <Region2 />
    </div>
  );
}

function Section10() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start px-[260px] py-[95px] relative shrink-0 w-[1920px]" data-name="Section">
      <Section11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[110px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Section9 />
      <Section10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[1007px] w-[1920px]">
      <Frame10 />
    </div>
  );
}

function Frame18() {
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
    <div className="[word-break:break-word] content-stretch flex font-['Jost:Bold',sans-serif] font-bold gap-[65px] items-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[34px]">Inicio</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[34px]">Categorías</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[34px]">Ofertas</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[34px]">Nosotros</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[34px]">Contacto</p>
      </div>
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0">
      <LucideSearch />
      <div className="[word-break:break-word] flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#9b9b9b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[34px]">Buscar productos</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex flex-col h-[48px] items-start pl-[20px] pr-[418px] py-[7px] relative rounded-[20px] shrink-0 w-[581px]">
      <Frame12 />
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[45px] items-center relative shrink-0">
      <LucideHeart />
      <LucideShoppingCart />
      <LucideUserRound />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[84px] items-center relative shrink-0 w-full">
      <Frame11 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1444px]">
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1497px]">
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1844px]">
      <Frame18 />
      <Frame15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[1813px]">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[72px] items-start left-0 pl-[54px] pr-[53px] top-0 w-[1920px]">
      <Frame19 />
    </div>
  );
}

function Component27() {
  return (
    <button className="absolute h-[44px] left-[245px] rounded-[5px] top-[531px] w-[133.61px] border-0 bg-transparent cursor-pointer p-0" data-name="687" onClick={() => navigateTo("ofertas")}>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[26px] leading-[42px] left-[15px] text-[16px] text-black top-0 w-[103px] whitespace-nowrap">Comprar ahora</p>
    </button>
  );
}

export default function MujerPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Mujer">
      <div className="h-[846px] relative shrink-0 w-[1920px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <OptimizedImage priority kind="hero" alt="" className="absolute h-[151.48%] left-[0.01%] max-w-none top-[-25.74%] w-full" src={imgRectangle143} />
        </div>
      </div>
      <div className="bg-white h-[5483px] relative shrink-0 w-full" />
      <Footer />
      <Frame9 />
      <Frame21 />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal leading-[70px] left-[237px] text-[58px] text-black top-[283px] w-[714px]">¡Ofertas que No Puedes Dejar Pasar!</p>
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[56px] leading-[30px] left-[238px] text-[18px] text-black top-[431px] w-[507.75px]">Aprovecha descuentos exclusivos en prendas seleccionadas y renueva tu estilo al mejor precio.</p>
      <Component27 />
    </div>
  );
}
