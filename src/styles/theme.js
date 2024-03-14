import { extendTheme } from "@chakra-ui/react"
import { buttonStyles as Button } from "./buttonStyles";

/**
 * dark = 10% darker
 * darker = 20% darker
 * light = 10% lighter
 * lighter = 20% lighter
 */
export const theme = extendTheme({
    colors: {
        brand: {
            primary: '#495E57',
            'primary-dark': '#30453E',
            'primary-darker': '#162B24',
            'primary-light': '#637871',
            'primary-lighter': '#7C918A',
            secondary: '#F4CE14',
            'secondary-dark': '#DBB500',
            'secondary-darker': '#C19B00',
            'secondary-light': '#FFE82E',
            'secondary-lighter': '#FFFF47'
        }
    },
    components: {
        Button
    }
});
