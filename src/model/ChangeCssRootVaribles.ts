import { Theme } from "../cotext/ThemeCotext";


export function changeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'components-background',
        'card-background',
        'card-shdow',
        'text-color',
    ];

    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
            );
    });
}