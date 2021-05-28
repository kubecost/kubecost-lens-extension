# Lens "Hello World" Sample Extension

Simple Lens extension that adds following features:

* "Hello World" page to a cluster menu.
* "Hello World" information to a pod details.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/lensapp/lens-extension-samples.git
ln -s $(pwd)/lens-extension-samples/helloworld-sample ~/.k8slens/extensions/helloworld-sample
```

## Build

To build the extension you can use `make` or run the `npm` commands manually:

```sh
cd lens-extension-samples/helloworld-sample
make build
```

OR

```sh
cd lens-extension-samples/helloworld-sample
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd lens-extension-samples/helloworld-sample
npm run dev
```

## Test

Open Lens application and navigate to a cluster. You should see "Hello World" in a menu.

## Uninstall

```sh
rm ~/.k8slens/extensions/helloworld-sample
```

Restart Lens application.
