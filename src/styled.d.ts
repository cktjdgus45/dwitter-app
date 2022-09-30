import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: {
            big: string;
            middle: string;
            small: string;
            verySmall: string;
        },
        color: {
            blue: string;
            bluesky: string;
            grey: string;
            black: string;
            white: string;
        }
    }
}