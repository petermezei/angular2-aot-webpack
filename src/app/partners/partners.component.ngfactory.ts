/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './partners.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './partners.component.css.shim';
import * as import10 from '../common/header/header.component';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '../common/header/header.component.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/security';
export class Wrapper_PartnersComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PartnersComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.PartnersComponent();
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
const nodeDebugInfos_PartnersComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.PartnersComponent],import0.PartnersComponent,{})];
var renderType_PartnersComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PartnersComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PartnersComponent>;
  _PartnersComponent_0_3:Wrapper_PartnersComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PartnersComponent_Host0,renderType_PartnersComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_PartnersComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'ng-component',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_PartnersComponent0(this.viewUtils,this,0,this._el_0);
    this._PartnersComponent_0_3 = new Wrapper_PartnersComponent();
    this.compView_0.create(this._PartnersComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PartnersComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PartnersComponent) && (0 === requestNodeIndex))) { return this._PartnersComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._PartnersComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PartnersComponentNgFactory:import8.ComponentFactory<import0.PartnersComponent> = new import8.ComponentFactory<import0.PartnersComponent>('ng-component',View_PartnersComponent_Host0,import0.PartnersComponent);
const styles_PartnersComponent:any[] = [import9.styles];
const nodeDebugInfos_PartnersComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo([import10.HeaderComponent],import10.HeaderComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import11.TemplateRef,
    import12.NgFor
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_PartnersComponent:import3.RenderComponentType = import4.createRenderComponentType('/home/peter/Desktop/git/angular2-aot-webpack/src/app/partners/partners.component.html',0,import5.ViewEncapsulation.Emulated,styles_PartnersComponent,{});
export class View_PartnersComponent0 extends import1.DebugAppView<import0.PartnersComponent> {
  _el_0:any;
  compView_0:import1.AppView<import10.HeaderComponent>;
  _HeaderComponent_0_3:import13.Wrapper_HeaderComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _vc_18:import14.ViewContainer;
  _TemplateRef_18_5:any;
  _NgFor_18_6:import15.Wrapper_NgFor;
  _text_19:any;
  _text_20:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PartnersComponent0,renderType_PartnersComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_PartnersComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'pm-header',import4.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this.compView_0 = new import13.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import13.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',this.debug(1,0,23));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','container'),this.debug(2,1,0));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',this.debug(3,1,23));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','row'),this.debug(4,2,4));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',this.debug(5,2,21));
    this._el_6 = import4.createRenderElement(this.renderer,this._el_4,'div',new import4.InlineArray2(2,'class','col-md-12'),this.debug(6,3,8));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',this.debug(7,3,31));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_6,'h1',import4.EMPTY_INLINE_ARRAY,this.debug(8,4,12));
    this._text_9 = this.renderer.createText(this._el_8,'Partners',this.debug(9,4,16));
    this._text_10 = this.renderer.createText(this._el_6,'\n            ',this.debug(10,4,29));
    this._el_11 = import4.createRenderElement(this.renderer,this._el_6,'p',new import4.InlineArray2(2,'class','lead'),this.debug(11,5,12));
    this._text_12 = this.renderer.createText(this._el_11,'Creating a better product requires teamwork, partnerships and collaboration. We are grateful to work together with such amazing partners.',this.debug(12,5,28));
    this._text_13 = this.renderer.createText(this._el_6,'\n        ',this.debug(13,5,169));
    this._text_14 = this.renderer.createText(this._el_4,'\n    ',this.debug(14,6,14));
    this._text_15 = this.renderer.createText(this._el_2,'\n    ',this.debug(15,7,10));
    this._el_16 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','row'),this.debug(16,8,4));
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',this.debug(17,8,21));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16,this.debug(18,9,8));
    this._vc_18 = new import14.ViewContainer(18,16,this,this._anchor_18);
    this._TemplateRef_18_5 = new import11.TemplateRef_(this,18,this._anchor_18);
    this._NgFor_18_6 = new import15.Wrapper_NgFor(this._vc_18.vcRef,this._TemplateRef_18_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_19 = this.renderer.createText(this._el_16,'\n    ',this.debug(19,11,14));
    this._text_20 = this.renderer.createText(this._el_2,'\n',this.debug(20,12,10));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._text_20
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    if (((token === import11.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import12.NgFor) && (18 === requestNodeIndex))) { return this._NgFor_18_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.debug(18,9,26);
    const currVal_18_0_0:any = this.context.partners;
    this._NgFor_18_6.check_ngForOf(currVal_18_0_0,throwOnChange,false);
    this._NgFor_18_6.ngDoCheck(this,this._anchor_18,throwOnChange);
    this._vc_18.detectChangesInNestedViews(throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_18.destroyNestedViews();
    this.compView_0.destroy();
    this.debug(0,0,0);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 18)) { return new View_PartnersComponent1(this.viewUtils,this,18,this._anchor_18,this._vc_18); }
    return (null as any);
  }
}
const nodeDebugInfos_PartnersComponent1:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_PartnersComponent1 extends import1.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_PartnersComponent1,renderType_PartnersComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_PartnersComponent1,declaredViewContainer);
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','item'),this.debug(0,9,8));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',this.debug(1,9,59));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'img',new import4.InlineArray2(2,'class','img-responsive'),this.debug(2,10,12));
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',this.debug(3,10,110));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(2,10,17);
    const currVal_4:any = import4.inlineInterpolate(1,'/assets/images/partners/',this.context.$implicit.logo,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    this.debug(2,10,64);
    const currVal_5:any = import4.inlineInterpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_2,'alt',currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}