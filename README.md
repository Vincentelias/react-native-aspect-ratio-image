# react-native-aspect-ratio-image

A responsive image component that always takes up the full width of the parent container and sets height according to the aspect ratio

## Installation

```sh
npm install react-native-aspect-ratio-image
```

## Usage

```js
import { AspectRatioImage } from 'react-native-aspect-ratio-image';

// Remote image
<AspectRatioImage source={{ uri: 'https://unsplash.it/400/400?image=1' }}/>

// Local image
<AspectRatioImage source={require('../assets/icon.png')} />

// You can use any props as you would on regular images:
<AspectRatioImage alt={"test-image"} source={require('../assets/icon.png')} />

```

## Author

Made by [Vincent Elias](https://github.com/Vincentelias)

## License

MIT

---
