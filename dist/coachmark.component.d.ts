import { Base } from '@spectrum/sp-base';
export declare class Coachmark extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    dark: boolean;
    light: boolean;
    quiet: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-coachmark': Coachmark;
    }
}
