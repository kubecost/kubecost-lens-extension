# Lens Kubecost Extension

A simple Kubecost Lens extension that adds namespace cost data (from the last 24 hours) to the Namespaces view.

https://user-images.githubusercontent.com/453512/120871588-dd8d1b80-c550-11eb-90b6-f90da1004a69.mov

## Installation

- Install the community edition of Kubecost: https://www.kubecost.com/install.html
- Download the kubecost-lens-extension `.tgz` from https://github.com/kubecost/kubecost-lens-extension/releases/tag/v0.0.2 under releases. Alternatively, you may copy the download URL of the release artifact.
- Open the Lens application, select the Lens menu, and then click Extensions. Or, use the shortcut `Shift` + `Command` + `E` to open the Manage Lens Extensions page.
- Specify the path (.tar, .tgz) or download URL to the extension package and click Install.
- `port-forward` into Kubecost: eg., `kubectl port-forward --namespace kubecost deployment/kubecost-cost-analyzer 9090`
- View namespace cost data!
