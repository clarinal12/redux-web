const Heading = {
  variants: {
    h1: {
      fontSize: '40px',
      fontWeight: '800',
      lineHeight: '40px',
      letterSpacing: '-0.9px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '800',
      lineHeight: '40px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '24px',
    },
  },
};

const Text = {
  variants: {
    lg: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    normal: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    'lg-button': {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '600',
    },
    'normal-button': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
    },
    'sm-button': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '600',
    },
  },
  defaultProps: {
    variant: 'normal',
  },
};

const Button = {
  baseStyle: {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '16px',
    borderRadius: '68px',
    _focus: {
      // boxShadow: 'none',
      // borderWidth: '2px',
      // borderColor: 'brand-violet',
    },
  },
  sizes: {
    large: {
      padding: '20px 32px',
    },
    small: {
      padding: '16px 24px',
    },
  },
  variants: {
    primary: {
      bgColor: 'brand-violet',
      color: 'white',
      _hover: {
        opacity: '0.8',
        _disabled: {
          bgColor: 'brand-violet',
          opacity: '0.2',
        },
      },
      _disabled: {
        opacity: '0.2',
      },
    },
    secondary: {
      bgColor: 'white',
      color: 'gray10',
      borderWidth: '2px',
      borderColor: 'gray3',
      _hover: {
        bgColor: 'gray1',
        _disabled: {
          bgColor: 'white',
          opacity: '0.4',
        },
      },
      _disabled: {
        opacity: '0.4',
      },
    },
    black: {
      bgColor: 'gray10',
      color: 'white',
      _hover: {
        opacity: '0.8',
        _disabled: {
          bgColor: 'gray10',
          opacity: '0.2',
        },
      },
      _disabled: {
        opacity: '0.2',
      },
    },
    red: {
      bgColor: 'brand-red',
      color: 'white',
      _hover: {
        opacity: '0.8',
        _disabled: {
          bgColor: 'brand-red',
          opacity: '0.2',
        },
      },
      _disabled: {
        opacity: '0.2',
      },
    },
  },
  defaultProps: {
    variant: 'secondary',
    size: 'small',
  },
};

const Input = {
  baseStyle: {
    field: {
      borderRadius: '8px',
      _placeholder: {
        color: 'gray5',
        lineHeight: '20px',
      },
    },
  },
  sizes: {
    md: {
      field: {
        padding: '12px 16px',
        _placeholder: {
          fontSize: '14px',
        },
      },
    },
  },
  variants: {
    outline: {
      field: {
        color: 'gray10',
        bgColor: 'white',
        borderWidth: '2px',
        borderColor: 'gray3',
        _focus: {
          borderColor: 'brand-violet',
          boxShadow: 'none',
        },
        _hover: {
          borderColor: 'gray5',
          _disabled: {
            borderColor: 'gray3',
          },
        },
        _invalid: {
          borderColor: 'brand-red',
          boxShadow: 'none',
        },
      },
    },
  },
};

const Textarea = {
  baseStyle: Input.baseStyle.field,
  variants: {
    outline: Input.variants.outline.field,
  },
};

const PinInput = {
  sizes: {
    md: {
      _placeholder: {
        fontSize: '14px',
      },
    },
    xl: {
      fontSize: 'xl',
      w: 14,
      h: 14,
      _placeholder: {
        fontSize: 'xl',
      },
    },
  },
  baseStyle: {
    borderRadius: '8px',
    _placeholder: {
      color: 'gray5',
      lineHeight: '20px',
    },
  },
  variants: {
    outline: Input.variants.outline.field,
  },
};

const FormLabel = {
  baseStyle: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    color: 'gray10',
  },
};

const FormError = {
  baseStyle: {
    text: {
      ...FormLabel.baseStyle,
      color: 'brand-red',
    },
  },
};

const Select = {
  baseStyle: {
    field: {
      padding: '0px 16px',
      borderRadius: '8px',
    },
  },
  variants: Input.variants,
};

const Link = {
  baseStyle: {
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    color: 'brand-violet',
    lineHeight: '24px',
  },
};

const Tag = {
  parts: ['container', 'label', 'closeButton'],
  variants: {
    success: {
      container: {
        bgColor: '#C1EEDC',
        borderRadius: '45px',
        padding: '4px 8px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#096A47',
        lineHeight: '14px',
      },
    },
  },
};

const Switch = {
  variants: {
    primary: {
      track: {
        bg: 'gray3',
        _checked: {
          bg: 'brand-violet',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};

const Modal = {
  parts: ['header', 'body', 'footer', 'closeButton'],
  baseStyle: {
    header: {
      padding: '32px 48px 0 48px',
    },
    body: {
      padding: '16px 48px',
    },
    footer: {
      padding: '0 48px 32px 48px',
    },
    closeButton: {
      top: '16px',
      right: '16px',
    },
  },
};

const Tabs = {
  parts: ['tab'],
  variants: {
    line: ({ orientation }: { orientation?: string }) => {
      const isVertical = orientation === 'vertical';
      const borderProp = orientation === 'vertical' ? 'borderStart' : 'borderBottom';
      const marginProp = isVertical ? 'marginStart' : 'marginBottom';
      const paddingProp = isVertical ? 'paddingStart' : 'paddingBottom';

      return {
        tablist: {
          [borderProp]: '2px solid',
          borderColor: '#F8F8F8',
        },
        tab: {
          color: 'gray7',
          [borderProp]: '0px solid',
          borderColor: '#F8F8F8',
          [marginProp]: '-2px',
          [paddingProp]: '16px',
          _selected: {
            color: '#1C121C',
            [borderProp]: '4px solid #A54ED5',
            fontWeight: '600',
          },
          _active: {
            bg: 'transparent',
          },
          _disabled: {
            opacity: 0.4,
            cursor: 'not-allowed',
          },
        },
      };
    },
  },
};

export const components = {
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormError,
  Select,
  PinInput,
  Link,
  Tag,
  Switch,
  Modal,
  Tabs,
};
