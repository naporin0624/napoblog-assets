import React from "react";
import { AntTab } from "@/components/Ant-Tab";

export function AntTabDemo() {
  return <AntTab tabNames={[...new Array(20)].fill(1).map((_, i) => `tab: ${i}`)} />;
}
