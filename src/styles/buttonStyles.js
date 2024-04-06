export const buttonStyles = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: {
            bg: 'brand.primary',
            color: 'white',
            _hover: {
                bg: 'brand.primary-dark'
            },
            _active: {
                bg: 'brand.primary-darker'
            }
        },
        secondary: {
            bg: 'brand.secondary',
            color: 'brand.primary',
            _hover: {
                bg: 'brand.secondary-dark',
                color: 'brand.primary-dark'
            },
            _active: {
                bg: 'brand.secondary-darker',
                color: 'brand.primary-darker'
            }
        },
        link: {
            color: 'brand.primary'
        }
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {}
}