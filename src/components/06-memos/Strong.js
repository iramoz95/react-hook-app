import React, { memo } from "react";

export const Strong = memo(({ value }) => {
  console.log("Called again");
  return <strong>{value}</strong>;
});
