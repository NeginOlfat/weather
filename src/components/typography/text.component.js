import styled from "styled-components/native";

const defaultText = (theme) => `
  font-size: ${theme.fontSize.title};
  color: ${theme.color.gray};
`;

const title = (theme) => `
    font-size: ${theme.fontSize.title};
    color: ${theme.color.white};
`;

const primary = (theme) => `
    font-size: ${theme.fontSize.body};
    color: ${theme.color.white};
`;

const secondary = (theme) => `
    font-size: ${theme.fontSize.body};
    color: ${theme.color.gray};
`;

const variants = {
    primary,
    secondary,
    title,
    defaultText
};

export const Text = styled.Text`
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
    variant: "defaultText",
};
