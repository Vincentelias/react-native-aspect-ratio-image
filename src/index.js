import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

export function AspectRatioImage(props) {
  const { source, ...otherProps } = props;

  const [ratio, setRatio] = useState(null);
  const [originalImageDimensions, setOriginalImageDimensions] = useState(null);
  const [newImageWidth, setNewImageWidth] = useState(null);
  const initImageDimensions = () => {
    const isLocalImage = typeof source === 'number';

    const uri = isLocalImage ? Image.resolveAssetSource(source).uri : source?.uri;

    Image.getSize(uri, (width, height) => {
      setRatio(newImageWidth / width);
      setOriginalImageDimensions({ width, height });
    });
  };

  useEffect(() => {
    const sourceValid = typeof source === 'number' || source?.uri;

    if (!newImageWidth || !sourceValid) {
      return;
    }

    initImageDimensions();
  }, [source, newImageWidth]);

  const getImage = () => {
    if (!newImageWidth || !ratio || !originalImageDimensions) {
      return null;
    }

    return (
      <Image
        source={source}
        {...otherProps}
        style={{
          width: newImageWidth,
          height: originalImageDimensions.height * ratio,
          ...otherProps.style,
        }}
      />
    );
  };

  return (
    <View
      style={{ width: '100%' }}
      onLayout={(event) => {
        if (!newImageWidth) {
          setNewImageWidth(event.nativeEvent.layout.width);
        }
      }}
    >
      {getImage()}
    </View>
  );
}
