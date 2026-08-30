import styles from './Texts.module.css';

const VARIANT_CLASS = {
  title1: styles.title1,
  title2: styles.title2,
  title3: styles.title3,
  title4: styles.title4,
  title5: styles.title5,
  subtitle1: styles.subtitle1,
  subtitle2: styles.subtitle2,
  subtitle3: styles.subtitle3,
  body1: styles.body1,
  body2: styles.body2,
  caption: styles.caption,
};

const COLOR_CLASS = {
  primary: styles.colorPrimary,
  body: styles.colorBody,
  body1: styles.colorBody1,
  body2: styles.colorBody2,
  body3: styles.colorBody3,
  neutral: styles.colorNeutral,
  error: styles.colorError,
  info: styles.colorInfo,
  white: styles.colorWhite,
};

const WEIGHT_CLASS = {
  light: styles.weightLight,
  regular: styles.weightRegular,
  bold: styles.weightBold,
};

export default function Texts({
  children,
  variant = 'body2',
  color = 'body',
  weight,
  as,
  ellipsis = false,
  className,
  ...rest
}) {
  const Tag = as || variant.startsWith('title') || variant.startsWith('subtitle') ? 'p' : 'span';

  const classes = [
    styles.text,
    VARIANT_CLASS[variant] ?? styles.body2,
    COLOR_CLASS[color] ?? styles.colorBody,
    weight ? WEIGHT_CLASS[weight] : '',
    ellipsis ? styles.ellipsis : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
