import { Component } from '@angular/core';
export var CompanyComponent = (function () {
    function CompanyComponent() {
        this.join = function () {
            alert("Ok");
        };
    }
    CompanyComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './company.component.html',
                    styleUrls: ['./company.component.css']
                },] },
    ];
    CompanyComponent.ctorParameters = [];
    return CompanyComponent;
}());
//# sourceMappingURL=company.component.js.map