import { Image } from 'rebass';

export default ({ size = 32, desc = 'Image', url, ...props }) => (
  <Image
    {...props}
    src={url}
    alt={desc}
    width={size}
    height={size}
    sx={{ borderRadius: 'circle', overflow: 'hidden', ...props.sx }}
  />
);
