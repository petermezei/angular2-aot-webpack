/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './legal-menu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './legal.component.css.shim';
import * as import10 from '@angular/router/src/directives/router_link';
import * as import11 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
export class Wrapper_LegalMenuComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LegalMenuComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.LegalMenuComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_LegalMenuComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.LegalMenuComponent],import0.LegalMenuComponent,{})];
var renderType_LegalMenuComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_LegalMenuComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.LegalMenuComponent>;
  _LegalMenuComponent_0_3:Wrapper_LegalMenuComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegalMenuComponent_Host0,renderType_LegalMenuComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_LegalMenuComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'legalMenu',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_LegalMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._LegalMenuComponent_0_3 = new Wrapper_LegalMenuComponent();
    this.compView_0.create(this._LegalMenuComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._LegalMenuComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LegalMenuComponent) && (0 === requestNodeIndex))) { return this._LegalMenuComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._LegalMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LegalMenuComponentNgFactory:import8.ComponentFactory<import0.LegalMenuComponent> = new import8.ComponentFactory<import0.LegalMenuComponent>('legalMenu',View_LegalMenuComponent_Host0,import0.LegalMenuComponent);
const styles_LegalMenuComponent:any[] = [import9.styles];
const nodeDebugInfos_LegalMenuComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import10.RouterLinkWithHref],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_LegalMenuComponent:import3.RenderComponentType = import4.createRenderComponentType('/home/peter/Desktop/git/angular2-aot-webpack/src/app/legal/legal-menu.component.html',0,import5.ViewEncapsulation.Emulated,styles_LegalMenuComponent,{});
export class View_LegalMenuComponent0 extends import1.DebugAppView<import0.LegalMenuComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _RouterLinkWithHref_4_3:import11.Wrapper_RouterLinkWithHref;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import11.Wrapper_RouterLinkWithHref;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _RouterLinkWithHref_10_3:import11.Wrapper_RouterLinkWithHref;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _RouterLinkWithHref_13_3:import11.Wrapper_RouterLinkWithHref;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _RouterLinkWithHref_16_3:import11.Wrapper_RouterLinkWithHref;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _arr_25:any;
  _arr_26:any;
  _arr_27:any;
  _arr_28:any;
  _arr_29:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegalMenuComponent0,renderType_LegalMenuComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_LegalMenuComponent0);
    this._arr_25 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_26 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_27 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_28 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_29 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','menu'),this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',this.debug(1,0,18));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'div',new import4.InlineArray2(2,'class','list-group'),this.debug(2,1,4));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',this.debug(3,1,28));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'a',new import4.InlineArray2(2,'class','list-group-item'),this.debug(4,2,8));
    this._RouterLinkWithHref_4_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_5 = this.renderer.createText(this._el_4,'Privacy policy',this.debug(5,2,76));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',this.debug(6,2,94));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_2,'a',new import4.InlineArray2(2,'class','list-group-item'),this.debug(7,3,8));
    this._RouterLinkWithHref_7_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_8 = this.renderer.createText(this._el_7,'Commercial license',this.debug(8,3,80));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',this.debug(9,3,102));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_2,'a',new import4.InlineArray2(2,'class','list-group-item'),this.debug(10,4,8));
    this._RouterLinkWithHref_10_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_11 = this.renderer.createText(this._el_10,'Commercial license (OEM)',this.debug(11,4,84));
    this._text_12 = this.renderer.createText(this._el_2,'\n        ',this.debug(12,4,112));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_2,'a',new import4.InlineArray2(2,'class','list-group-item'),this.debug(13,5,8));
    this._RouterLinkWithHref_13_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_14 = this.renderer.createText(this._el_13,'Open-source license',this.debug(14,5,81));
    this._text_15 = this.renderer.createText(this._el_2,'\n        ',this.debug(15,5,104));
    this._el_16 = import4.createRenderElement(this.renderer,this._el_2,'a',new import4.InlineArray2(2,'class','list-group-item'),this.debug(16,6,8));
    this._RouterLinkWithHref_16_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_17 = this.renderer.createText(this._el_16,'GNU Affero General Public License',this.debug(17,6,78));
    this._text_18 = this.renderer.createText(this._el_2,'\n    ',this.debug(18,6,115));
    this._text_19 = this.renderer.createText(this._el_0,'\n',this.debug(19,7,10));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_4,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_7,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    var disposable_2:Function = import4.subscribeToRenderElement(this,this._el_10,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_10));
    var disposable_3:Function = import4.subscribeToRenderElement(this,this._el_13,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_4:Function = import4.subscribeToRenderElement(this,this._el_16,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.RouterLinkWithHref) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_4_3.context; }
    if (((token === import10.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3.context; }
    if (((token === import10.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._RouterLinkWithHref_10_3.context; }
    if (((token === import10.RouterLinkWithHref) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RouterLinkWithHref_13_3.context; }
    if (((token === import10.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkWithHref_16_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(4,2,11);
    const currVal_4_0_0:any = this._arr_25('/legal/privacy-policy');
    this._RouterLinkWithHref_4_3.check_routerLink(currVal_4_0_0,throwOnChange,false);
    this._RouterLinkWithHref_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this.debug(7,3,11);
    const currVal_7_0_0:any = this._arr_26('/legal/commercial-license');
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(10,4,11);
    const currVal_10_0_0:any = this._arr_27('/legal/commercial-license-oem');
    this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0,throwOnChange,false);
    this._RouterLinkWithHref_10_3.ngDoCheck(this,this._el_10,throwOnChange);
    this.debug(13,5,11);
    const currVal_13_0_0:any = this._arr_28('/legal/open-source-license');
    this._RouterLinkWithHref_13_3.check_routerLink(currVal_13_0_0,throwOnChange,false);
    this._RouterLinkWithHref_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    this.debug(16,6,11);
    const currVal_16_0_0:any = this._arr_29('/legal/gnu-agpl-license');
    this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLinkWithHref_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    this._RouterLinkWithHref_4_3.checkHost(this,this,this._el_4,throwOnChange);
    this._RouterLinkWithHref_7_3.checkHost(this,this,this._el_7,throwOnChange);
    this._RouterLinkWithHref_10_3.checkHost(this,this,this._el_10,throwOnChange);
    this._RouterLinkWithHref_13_3.checkHost(this,this,this._el_13,throwOnChange);
    this._RouterLinkWithHref_16_3.checkHost(this,this,this._el_16,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_4_3.ngOnDestroy();
    this.debug(4,2,8);
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this.debug(7,3,8);
    this._RouterLinkWithHref_10_3.ngOnDestroy();
    this.debug(10,4,8);
    this._RouterLinkWithHref_13_3.ngOnDestroy();
    this.debug(13,5,8);
    this._RouterLinkWithHref_16_3.ngOnDestroy();
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.debug(4,2,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_4_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.debug(7,3,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_7_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_10(eventName:string,$event:any):boolean {
    this.debug(10,4,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_10_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.debug(13,5,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_13_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.debug(16,6,8);
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
}