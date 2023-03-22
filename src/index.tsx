import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import type {
  ImageProps as DefaultImageProps,
  ImageURISource,
} from 'react-native';

type ImageProps = DefaultImageProps & {
  source: ImageURISource;
};
export function AspectRatioImage(props: ImageProps) {
  const { source, ...otherProps } = props;

  console.log(source);
  interface ImageDimensions {
    width: number;
    height: number;
  }

  const [ratio, setRatio] = useState<number>(0);
  const [originalImageDimensions, setOriginalImageDimensions] =
    useState<ImageDimensions>();
  const [newImageWidth, setNewImageWidth] = useState<number>(0);
  const initImageDimensions = () => {
    const isLocalImage = typeof source === 'number';

    const uri = isLocalImage ? Image.resolveAssetSource(source) : source?.uri;

    Image.getSize(uri as string, (width, height) => {
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
          ...(otherProps.style as ImageProps),
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
