import { defineSemanticTokens } from "@pandacss/dev";

// Park UI's neutral scale (Radix), trimmed to the steps we use
export const colors = defineSemanticTokens.colors({
  neutral: {
    1: { value: { base: "#fcfcfc", _dark: "#111111" } },
    3: { value: { base: "#f0f0f0", _dark: "#222222" } },
    4: { value: { base: "#e8e8e8", _dark: "#2a2a2a" } },
    11: { value: { base: "#646464", _dark: "#b4b4b4" } },
    12: { value: { base: "#202020", _dark: "#eeeeee" } },
  },
  // roles: what recipes reference
  fg: {
    default: { value: "{colors.neutral.12}" },
    muted: { value: "{colors.neutral.11}" },
  },
  canvas: { value: "{colors.neutral.1}" },
  border: { value: "{colors.neutral.4}" },
  surface: { value: { base: "{colors.white}", _dark: "{colors.neutral.1}" } },
  subtle: { value: "{colors.neutral.3}" },
});
