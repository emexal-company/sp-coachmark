import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Coachmark } from './coachmark.component';

export default function template(this: Coachmark) {

const classes = {
    'spectrum-CoachMarkIndicator--dark' : this.dark,
    'spectrum-CoachMarkIndicator--light' : this.light,
    'spectrum-CoachMarkIndicator--quiet' :this.quiet,
}
return html`

<div class="spectrum-CoachMarkIndicator ${classMap(classes)}" style="display: inline-block;">
  <div class="spectrum-CoachMarkIndicator-ring"></div>
  <div class="spectrum-CoachMarkIndicator-ring"></div>
  <div class="spectrum-CoachMarkIndicator-ring"></div>
</div>
`;
}
