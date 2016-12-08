import { Component } from '@angular/core';
export var PartnersComponent = (function () {
    function PartnersComponent() {
        this.partners = [
            { "name": "Microsoft", "logo": "microsoft.png" },
            { "name": "ICMA", "logo": "icma.jpg" },
            { "name": "Hungarian Tradehouse", "logo": "tradehouse.png" },
            { "name": "Digital Factory", "logo": "digital-factory.png" },
            { "name": "Fiware", "logo": "fiware.png" },
            { "name": "CEU Business School", "logo": "ceubs.jpg" },
            { "name": "CEED Tech", "logo": "ceed-tech.png" },
            { "name": "CE EN", "logo": "ce-en.jpg" }
        ];
    }
    PartnersComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './partners.component.html',
                    styleUrls: ['./partners.component.css']
                },] },
    ];
    PartnersComponent.ctorParameters = [];
    return PartnersComponent;
}());
//# sourceMappingURL=partners.component.js.map