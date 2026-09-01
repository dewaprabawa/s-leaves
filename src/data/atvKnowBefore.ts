import type { LucideIcon } from "lucide-react"
import {
  Car,
  Bike,
  Shield,
  Utensils,
  UserCheck,
  Shirt,
  Sun,
  Wallet,
  Smartphone,
} from "lucide-react"

export type KnowBeforeItem = {
  icon: LucideIcon
  title: string
  desc: string
}

export const atvWhatYouGetItems: KnowBeforeItem[] = [
  {
    icon: Car,
    title: "Hotel pickup & drop-off",
    desc: "Optional add-on — IDR 120,000 surcharge. Free Ubud pickup is included on the cycling tour only.",
  },
  {
    icon: Bike,
    title: "Guided ATV trail ride",
    desc: "Single or tandem quad bike through jungle paths, muddy tracks, and river crossings.",
  },
  {
    icon: Shield,
    title: "Boot shoes, helmet & insurance",
    desc: "Full safety gear fitted at our base before you hit the track.",
  },
  {
    icon: Utensils,
    title: "Simple menu lunch",
    desc: "A satisfying meal served after your ride so you can refuel.",
  },
  {
    icon: UserCheck,
    title: "Safety briefing & expert guide",
    desc: "English-speaking guidance — no prior ATV experience required.",
  },
]

export const atvWhatToBringItems: KnowBeforeItem[] = [
  {
    icon: Shirt,
    title: "Changing clothes or dry cloth",
    desc: "Trails get muddy — fresh clothes make the ride home comfortable.",
  },
  {
    icon: Sun,
    title: "Sunscreen",
    desc: "Recommended for open trail sections and midday rides.",
  },
  {
    icon: Wallet,
    title: "Cash for extras",
    desc: "Snacks, souvenirs, gratuities, or optional combo upgrades.",
  },
  {
    icon: Smartphone,
    title: "Waterproof phone case",
    desc: "Optional but handy for photos on muddy trails and river crossings.",
  },
]

export const atvWhatYouGetFooter =
  "Want more thrills? Ask about combining your ATV ride with river tubing on the Wos River when you book."

export const atvWhatToBringFooter =
  "Towels and changing facilities are available at our base — no need to pack your own."
