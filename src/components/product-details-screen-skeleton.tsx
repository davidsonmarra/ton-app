import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const ProductDetailsScreenSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item alignItems='center' justifyContent='center'>
        <SkeletonPlaceholder.Item
          width={250}
          height={24}
          borderRadius={4}
          style={{
            marginBottom: 24
          }}
        />
        <SkeletonPlaceholder.Item
          width={180}
          height={250}
          borderRadius={4}
          style={{
            marginBottom: 24
          }}
        />
        <SkeletonPlaceholder.Item
          flexDirection='row'
          style={{
            marginBottom: 24
          }}
        >
          <SkeletonPlaceholder.Item width={250 / 3.5} height={350 / 3.5} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={250 / 3.5}
            height={350 / 3.5}
            borderRadius={4}
            marginLeft={24}
          />
          <SkeletonPlaceholder.Item
            width={250 / 3.5}
            height={350 / 3.5}
            borderRadius={4}
            marginLeft={24}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={300}
          height={24}
          borderRadius={4}
          style={{
            marginBottom: 24
          }}
        />
        <SkeletonPlaceholder.Item
          width={300}
          height={24}
          borderRadius={4}
          style={{
            marginBottom: 24
          }}
        />
        <SkeletonPlaceholder.Item
          width={300}
          height={24}
          borderRadius={4}
          style={{
            marginBottom: 24
          }}
        />
        <SkeletonPlaceholder.Item
          width={230}
          height={150}
          borderRadius={4}
          style={{
            marginBottom: 48
          }}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
