import { Renderer } from "@k8slens/extensions";
import { NamespaceCostDetails } from "./src/ns-cost-details";
import React from "react";

export default class KubecostExtension extends Renderer.LensExtension {
  kubeObjectDetailItems = [
    {
      kind: "Namespace",
      apiVersions: ["v1"],
      priority: 10,
      components: {
        Details: (
          props: Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Namespace>
        ) => <NamespaceCostDetails {...props} />,
      },
    },
  ];

  async onActivate() {
    console.log("Kubecost extension activated");
  }
}
