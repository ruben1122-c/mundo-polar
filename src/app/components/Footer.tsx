import { OptimizedImage } from "@/app/components/OptimizedImage";
import { ASSETS } from "@/config/assets";

const footerSvgPaths = {
  p15593200:
    "M21.888 0.900981C21.7901 0.815085 21.6507 0.795157 21.5326 0.849943L0.190272 10.7662C0.0753722 10.8196 0.00138118 10.9342 1.28879e-08 11.0609C-0.00138115 11.1876 0.0701764 11.3038 0.183958 11.3596L6.2238 14.3237C6.33455 14.3781 6.46662 14.3658 6.56554 14.2919L12.4379 9.90283L7.82786 14.6448C7.76209 14.7125 7.72854 14.8052 7.73578 14.8992L8.19479 20.877C8.20498 21.0094 8.29377 21.1227 8.41998 21.1642C8.45372 21.1752 8.48838 21.1806 8.52265 21.1806C8.61663 21.1806 8.70805 21.1403 8.77165 21.0667L11.9774 17.3519L15.9404 19.2454C16.0264 19.2865 16.126 19.2882 16.2134 19.2502C16.3008 19.2121 16.3673 19.138 16.3959 19.0471L21.9849 1.24673C22.0239 1.12243 21.9859 0.986876 21.888 0.900981Z",
  p35d52800:
    "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 1.54737C13.5683 1.54737 16.5168 4.31688 16.8837 7.82845C17.2023 10.8767 15.3409 13.9103 13.0645 16.208C11.9682 17.3146 10.8122 18.2323 10.0247 18.8268L10 18.8454L9.97531 18.8268C9.1878 18.2323 8.03185 17.3146 6.93554 16.208C4.65912 13.9103 2.79774 10.8767 3.11631 7.82845C3.48316 4.31688 6.43171 1.54737 10 1.54737ZM10 6.18947C7.89931 6.18947 6.18947 7.89931 6.18947 10C6.18947 12.1007 7.89931 13.8105 10 13.8105C12.1007 13.8105 13.8105 12.1007 13.8105 10C13.8105 7.89931 12.1007 6.18947 10 6.18947ZM10 7.73684C11.2523 7.73684 12.2632 8.74768 12.2632 10C12.2632 11.2523 11.2523 12.2632 10 12.2632C8.74768 12.2632 7.73684 11.2523 7.73684 10C7.73684 8.74768 8.74768 7.73684 10 7.73684Z",
  p1a119000:
    "M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z",
  p37f20500:
    "M17.9042 12.1643C16.6575 12.1643 15.4523 11.9616 14.3235 11.5888C13.9712 11.4704 13.5701 11.5606 13.3039 11.8312L11.6669 13.5117C8.78443 12.0451 6.10912 9.53927 4.60682 6.55138L6.24151 4.88081C6.51659 4.60533 6.60228 4.20455 6.48834 3.84753C6.11559 2.71881 5.91284 1.51357 5.91284 0.266938C5.91284 0.12028 5.79256 0 5.6459 0H3.04513C2.89848 0 2.65825 0.103988 2.52731 0.23938C2.39209 0.37923 2.33334 0.577907 2.37847 0.771891C3.12328 3.97746 4.707 6.88373 7.02703 9.20377C9.34706 11.5238 12.2533 13.1075 15.4589 13.8523C15.6529 13.8974 15.8516 13.8387 15.9914 13.7035C16.1268 13.5725 16.2308 13.3323 16.2308 13.1857V10.5849C16.2308 10.4382 16.1105 10.3179 15.9639 10.3179H13.3631C13.2165 10.3179 13.0962 10.4382 13.0962 10.5849V13.1857C13.0962 13.3323 13.2165 13.4526 13.3631 13.4526",
};

const img68 = ASSETS.shared.footerMarks;

function Label() {
  return (
    <div className="absolute h-[51px] left-0 top-[2px] w-[320.19px]" data-name="Label">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[51px] leading-[28px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[320.39px]">
        Recibe novedades, promociones y lanzamientos de nuestra colección de invierno.
      </p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[23px] left-[15px] overflow-clip right-[50px] top-[13.5px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-0 text-[#555] text-[16px] top-0 tracking-[0.3px] w-[133.884px]">
        Tu correo electrónico
      </p>
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
          <path d={footerSvgPaths.p15593200} fill="var(--fill-0, black)" id="Vector" />
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
    <button className="absolute h-[50px] overflow-clip right-0 rounded-[5px] top-[106px] w-[52px] cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 border-0 bg-transparent p-0" data-name="Input" type="submit">
      <NewsletterIconSvgFill />
    </button>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 w-[348px]">
        Mantente al día con Mundo Polar
      </p>
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
                <path d={footerSvgPaths.p35d52800} fill="var(--fill-0, #AAAAAA)" id="Vector" />
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[38px] leading-[24px] left-0 text-[#aaa] text-[16px] top-[-15px] tracking-[0.3px] w-[137px]">
        +51 962 690 195
      </p>
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
                <path d={footerSvgPaths.p1a119000} fill="var(--fill-0, #AAAAAA)" id="Vector" />
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[192px]">
        contacto@mundopolar.com
      </p>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[197px] left-[681px] right-[876.66px] top-[74px]" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 w-[133px]">
        Contacto
      </p>
      <Icon />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[30px] text-[#aaa] text-[16px] top-[61px] tracking-[0.3px] w-[249.754px]">
        Lima, Perú
      </p>
      <Icon1 />
      <div className="absolute flex inset-[60.91%_94.47%_30.17%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0944 17.5586">
              <path d={footerSvgPaths.p37f20500} fill="var(--fill-0, #AAAAAA)" id="Vector" />
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[113px]">
        Sobre Nosotros
      </p>
    </div>
  );
}

function Component56() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[95.91px]" data-name="760">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[134px]">
        Nuestra Colección
      </p>
    </div>
  );
}

function Component57() {
  return (
    <div className="absolute h-[23px] left-0 top-[69.59px] w-[54.42px]" data-name="761">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.42px] text-[#aaa] text-[16px] top-[0.41px] tracking-[0.3px] w-[178px]">
        Preguntas Frecuentes
      </p>
    </div>
  );
}

function Component58() {
  return (
    <div className="absolute h-[23px] left-0 top-[103.39px] w-[91.91px]" data-name="762">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[92.252px]">
        Contáctanos
      </p>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-0 text-[24px] text-white top-0 tracking-[0.3px] w-[158.633px]">
        Conócenos
      </p>
      <List />
    </div>
  );
}

function Component60() {
  return (
    <div className="absolute h-[23px] left-0 top-[2px] w-[85.75px]" data-name="764">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[170px]">
        Términos y Condiciones
      </p>
    </div>
  );
}

function Component61() {
  return (
    <div className="absolute h-[23px] left-0 top-[35.8px] w-[67.03px]" data-name="765">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-[-0.14px] text-[#aaa] text-[16px] top-[0.2px] tracking-[0.3px] w-[170px]">
        Política de Privacidad
      </p>
    </div>
  );
}

function Component62() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[70px] w-[107px]" data-name="766">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[107px]">
        Guía de Tallas
      </p>
    </div>
  );
}

function Component63() {
  return (
    <div className="absolute h-[23px] left-[-0.14px] top-[103px] w-[115px]" data-name="767">
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[23px] leading-[28.8px] left-0 text-[#aaa] text-[16px] top-0 tracking-[0.3px] w-[180px]">
        Cambios y Devoluciones
      </p>
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
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[36px] leading-[36px] left-[-0.14px] text-[24px] text-white top-0 tracking-[0.3px] w-[158px]">
        Información
      </p>
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
        <OptimizedImage alt="" className="absolute left-0 max-w-none size-full top-0" src={img68} />
      </div>
    </div>
  );
}

interface FooterProps {
  absoluteTop?: number | string;
}

export function Footer({ absoluteTop }: FooterProps) {
  const isAbsolute = absoluteTop !== undefined;
  return (
    <div
      className={isAbsolute ? "absolute bg-[#111] h-[511px] left-0 right-0 shrink-0 w-[1921px]" : "bg-[#111] h-[511px] relative shrink-0 w-[1921px]"}
      style={isAbsolute ? { top: absoluteTop } : undefined}
      data-name="Footer"
    >
      <HorizontalBorder />
      <p className="[word-break:break-word] absolute font-['Jost:Regular',sans-serif] font-normal h-[24px] leading-[24px] left-[260px] text-[#aaa] text-[16px] top-[396.17px] tracking-[0.3px] w-[427px]">
        © 2026 Mundo Polar — Todos los derechos reservados.
      </p>
      <Component64 />
      <Component51 />
    </div>
  );
}
