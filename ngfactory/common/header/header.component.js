import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';
export var HeaderComponent = (function () {
    function HeaderComponent() {
        this.theme = "theme-default";
        this.menuItems = [
            new MenuItem("Slamby", "/home", "logo", false),
            new MenuItem("Pricing", "/pricing", "", false),
            new MenuItem("Support", "/support", "", false),
            new MenuItem("For developers", "https://developers.slamby.com", "", true)
        ];
        this.isOpen = false;
        this.menuOpen = function () {
            if (this.isOpen) {
                this.isOpen = false;
            }
            else {
                this.isOpen = true;
            }
        };
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pm-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                },] },
    ];
    HeaderComponent.ctorParameters = [];
    HeaderComponent.propDecorators = {
        'theme': [{ type: Input },],
    };
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map