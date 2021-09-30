import { Renderer } from "@k8slens/extensions";

export default class KubecostExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log("Kubecost extension activated");
  }

  onDeactivate() {
    console.log("Kubecost extension de-activated");
  }
}
