import tokensLight from '../tokens.light.json';

type ColorTokens = typeof tokensLight.colors;
type SpacingTokens = typeof tokensLight.spacing;
type BorderRadiusTokens = typeof tokensLight.borderRadius;
type TypographyTokens = typeof tokensLight.typography;

export interface Tokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  borderRadius: BorderRadiusTokens;
  typography: TypographyTokens;
}

// Default to light theme tokens
export const tokens: Tokens = tokensLight;

export default tokens; 