import { ReactNode } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CustomTooltip = ({ tooltip, children }: { tooltip: ReactNode; children: any }) => {
  if (tooltip) {
    return <OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>{children}</OverlayTrigger>;
  }
  return children;
};

export default CustomTooltip;
