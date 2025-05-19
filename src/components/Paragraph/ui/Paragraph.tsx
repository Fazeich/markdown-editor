import React, { FC, HTMLAttributes } from "react";
import { StyledParagraph } from "../lib/styles";

interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  fontSize?: number;
}

export const Paragraph: FC<IParagraphProps> = ({
  text,
  fontSize = 16,
  ...props
}) => {
  return (
    <StyledParagraph {...props} fontSize={fontSize}>
      {text}
    </StyledParagraph>
  );
};
