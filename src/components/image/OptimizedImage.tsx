import {
  getCloudinarySrcSet,
  getCloudinaryUrl,
} from '../../utils/url';

type OptimizedImageProps = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export const OptimizedImage = ({
  url,
  alt,
  width = 960,
  height,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: OptimizedImageProps) => {
  return (
    <img
      src={getCloudinaryUrl(url, { width })}
      srcSet={getCloudinarySrcSet(url)}
      // sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
};