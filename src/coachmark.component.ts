import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import coachmarkStyles from './coachmark.styles';
import template from './coachmark.template';

@customElement('sp-coachmark')
export class Coachmark extends Base {
  public static componentStyles = [coachmarkStyles];

  @property({ type: Boolean }) public dark: boolean = false;
  @property({ type: Boolean }) public light: boolean = false;
  @property({ type: Boolean }) public quiet: boolean = false;
  

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-coachmark': Coachmark;
  }
}



