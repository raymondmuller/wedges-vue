import { useStorage } from "@vueuse/core";

interface CodeConfig {
  prefix: string;
  componentsPath: string;
  utilsPath: string;
}

export function useConfigStore() {
  const codeConfig = useStorage<CodeConfig>("code-config", {
    prefix: "",
    componentsPath: "wedges-vue",
    utilsPath: "wedges-vue/lib/utils",
  });

  const setCodeConfig = (payload: CodeConfig) => {
    codeConfig.value = payload;
  };

  return {
    codeConfig,
    setCodeConfig,
  };
}
