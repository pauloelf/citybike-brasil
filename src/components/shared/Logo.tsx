import Image from "next/image"
import LogoSrc from "@/assets/logo.png"

export function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <Image alt="Logo" height={32} src={LogoSrc} width={32} />
      <span className="max-sm:hidden flex flex-col text-primary text-sm">
        <strong className="text-foreground text-base">CityBike</strong>
        Brasil
      </span>
    </div>
  )
}
