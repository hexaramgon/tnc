# CoolClimate/Calculator-API Package
This package aims to separate out calculation logics in [CoolClimate Calculator](https://coolclimate.org/calculator) so that the fronend can only focus on interaction logic and appearance instead of having a huge chunk of API code.

> Note: This package is still in early age of development, APIs are unstable so for internal use only. In the future we will consider publishing a package for public use.

## How to use
> This package has not been published yet, please contact us if you want to use this package.

### Installation

```
npm install --save @coolclimate/calculator-api
```

This will install the latest version of calculator-api.

### Include
If you are using ESM, include calculator API by:
```javascript
import * as calculatorAPI from '@coolclimate/calculator-api';
```
> There's no plan to support CommonJS usages.

### Use
You can look at [src/API.test.ts](src/API.test.ts) file to get a basic understanding of how to use those APIs.