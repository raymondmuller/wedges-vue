import { type VNode, cloneVNode, defineComponent } from "vue";
import { useConfigStore } from "@/stores/config";

export default defineComponent(
  (props, { slots }) => {
    const { codeConfig } = useConfigStore();

    return () => {
      const clonedVNode = slots.default?.()?.[0]
        ? cloneVNode(slots.default?.()?.[0], {
          key: JSON.stringify(codeConfig.value),
        })
        : undefined;

      // @ts-expect-error  cloneVNode
      const preVNode = [...clonedVNode?.children].find((node: VNode) => node.type === "pre") as VNode;
      // @ts-expect-error  cloneVNode
      const codeVNode = preVNode.children?.at(0) as VNode;

      if (codeVNode)
        return clonedVNode;
      else
        return slots.default?.();
    };
  },
);
