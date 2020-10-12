import { html } from 'lit-element';
import { DemoCoachmark } from './demo-coachmark.component';

import '@spectrum/sp-coachmark';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';

import '@spectrum/sp-demo';

export default function template(this: DemoCoachmark) {
  return html`
    <sp-container>
      <section>
      
      <sp-rule medium label="Coach Mark - Standard"></sp-rule>
      <sp-demo width="180">
        <pre><sp-coachmark></sp-coachmark></pre>
      </sp-demo>
    <br>
      <sp-demo width="180">
        <pre><sp-coachmark dark></sp-coachmark></pre>
      </sp-demo>
    <br>
      <sp-demo width="180">
        <pre><sp-coachmark light style="background-color: black;"></sp-coachmark></pre>
      </sp-demo>
    <br>
    <sp-rule medium label="Coach Mark - Quiet"></sp-rule>
      <sp-demo width="180">
        <pre><sp-coachmark quiet></sp-coachmark></pre>
      </sp-demo>
    <br>
      <sp-demo width="180">
        <pre><sp-coachmark dark quiet></sp-coachmark></pre>
      </sp-demo>
    <br>
      <sp-demo width="180">
        <pre><sp-coachmark light quiet style="background-color: black;"></sp-coachmark></pre>
      </sp-demo>
      
      </section>
    </sp-container>
  `;
}
