import { OptimizedImage } from "@/app/components/OptimizedImage";
import React from "react";
import svgPaths from "@/pages/nosotros/svgPaths";
import { ASSETS } from "@/config/assets";

const imgImageChaquetaCapucha = ASSETS.products.hoodedBrownJacket;
const imgImageAbrigoCorto = ASSETS.products.shortBrownCoat;
const imgImageHoodieFleece = ASSETS.products.gildanHeavyCottonShirt;
const imgImageSweaterCuello = ASSETS.products.turtleneckSweater;
const imgContainer4 = ASSETS.nosotros.story06;


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
    <button className="bg-[#004ac6] relative shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#003da4] hover:scale-102 border-0 p-0 text-left" data-name="Button" type="submit">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[36px] py-[15px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[0.6px] uppercase whitespace-nowrap">{`Enviar mensaje `}</p>
        <Icon32 />
      </div>
    </button>
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
          <OptimizedImage alt="" className="absolute h-[188.55%] left-[-0.05%] max-w-none top-[-0.02%] w-full" src={imgContainer4} />
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
      <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageChaquetaCapucha} />
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
      <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAbrigoCorto} />
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
      <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHoodieFleece} />
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
      <OptimizedImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSweaterCuello} />
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
