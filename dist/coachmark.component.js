import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import coachmarkStyles from './coachmark.styles';
import template from './coachmark.template';
let Coachmark = class Coachmark extends Base {
    constructor() {
        super(...arguments);
        this.dark = false;
        this.light = false;
        this.quiet = false;
    }
    render() {
        return template.call(this);
    }
};
Coachmark.componentStyles = [coachmarkStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Coachmark.prototype, "dark", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Coachmark.prototype, "light", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Coachmark.prototype, "quiet", void 0);
Coachmark = __decorate([
    customElement('sp-coachmark')
], Coachmark);
export { Coachmark };
//# sourceMappingURL=coachmark.component.js.map