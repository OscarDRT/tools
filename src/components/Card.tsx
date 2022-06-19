import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '../theme/theme';
import {Box, BoxProps} from './Box';

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<BoxProps>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box);
