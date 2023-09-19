import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";
import { number, string, oneOf } from "prop-types";

import icomoon from "../../assets/font/icomoon.ttf";
import selection from "../../assets/font/selection.json";

export default function Icon(props) {
  // keyとvalueが同じ場合は省略可能{ icomoon: icomoon } →  { icomoon }
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} style={{ lineHeight: size - 1 }} />;
}

Icon.propTypes = {
  name: oneOf(["plus", "delete", "pencil", "check"]).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: "#000000",
};
