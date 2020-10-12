import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-coachmark.styles';
import template from './demo-coachmark.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Coachmark } from '@spectrum/sp-coachmark';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-coachmark')
export class DemoCoachmark extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-coachmark': DemoCoachmark;
  }
}
