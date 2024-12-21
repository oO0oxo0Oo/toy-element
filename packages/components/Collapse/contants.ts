import type { InjectionKey } from "vue";
import type { CollapseContext } from "./types.ts";

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> =
  Symbol("collapseContext");