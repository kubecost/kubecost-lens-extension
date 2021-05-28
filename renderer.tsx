import { LensRendererExtension, Component, K8sApi } from "@k8slens/extensions";
import { NamespaceDetailsItem } from "./src/ns-cost-details"
import React from "react"

export default class ExampleExtension extends LensRendererExtension {
  kubeObjectDetailItems = [
    {
      kind: "Namespace",
      apiVersions: ["v1"],
      priority: 10,
      components: {
        Details: (props: Component.KubeObjectDetailsProps<K8sApi.Namespace>) => <NamespaceDetailsItem {...props} />
      }
    }
  ]

  async onActivate() {
    console.log("Kubecost extension activated")
  }
}
