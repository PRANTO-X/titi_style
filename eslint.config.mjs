import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: ["qx_orolo.myshopify.com/**"],
  },
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
