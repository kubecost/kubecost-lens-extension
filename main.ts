import { LensMainExtension } from "@k8slens/extensions";

export default class ExampleExtensionMain extends LensMainExtension {
  onActivate() {
    console.log('kubecost-extension activated');
  }

  onDeactivate() {
    console.log('kubecost-extension de-activated');
  }
}
