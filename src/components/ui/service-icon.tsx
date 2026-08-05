import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/types";
import {
  HeadsetIcon,
  ReturnIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/ui/icons";

const ICONS: Record<ServiceIcon, (props: SVGProps<SVGSVGElement>) => React.ReactNode> = {
  truck: TruckIcon,
  support: HeadsetIcon,
  return: ReturnIcon,
  secure: ShieldIcon,
};

export function ServiceIconGlyph({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: ServiceIcon }) {
  const Glyph = ICONS[name];
  return <Glyph {...props} />;
}
