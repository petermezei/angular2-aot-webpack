/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './company.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './company.component.css.shim';
import * as import10 from '../common/header/header.component';
import * as import11 from '../common/header/header.component.ngfactory';
export class Wrapper_CompanyComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CompanyComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.CompanyComponent();
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
const nodeDebugInfos_CompanyComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.CompanyComponent],import0.CompanyComponent,{})];
var renderType_CompanyComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CompanyComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.CompanyComponent>;
  _CompanyComponent_0_3:Wrapper_CompanyComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CompanyComponent_Host0,renderType_CompanyComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CompanyComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'ng-component',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_CompanyComponent0(this.viewUtils,this,0,this._el_0);
    this._CompanyComponent_0_3 = new Wrapper_CompanyComponent();
    this.compView_0.create(this._CompanyComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._CompanyComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CompanyComponent) && (0 === requestNodeIndex))) { return this._CompanyComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._CompanyComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CompanyComponentNgFactory:import8.ComponentFactory<import0.CompanyComponent> = new import8.ComponentFactory<import0.CompanyComponent>('ng-component',View_CompanyComponent_Host0,import0.CompanyComponent);
const styles_CompanyComponent:any[] = [import9.styles];
const nodeDebugInfos_CompanyComponent0:import2.StaticNodeDebugInfo[] = [
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
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_CompanyComponent:import3.RenderComponentType = import4.createRenderComponentType('/home/peter/Desktop/git/angular2-aot-webpack/src/app/company/company.component.html',0,import5.ViewEncapsulation.Emulated,styles_CompanyComponent,{});
export class View_CompanyComponent0 extends import1.DebugAppView<import0.CompanyComponent> {
  _el_0:any;
  compView_0:import1.AppView<import10.HeaderComponent>;
  _HeaderComponent_0_3:import11.Wrapper_HeaderComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _el_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _text_69:any;
  _el_70:any;
  _text_71:any;
  _el_72:any;
  _text_73:any;
  _text_74:any;
  _text_75:any;
  _text_76:any;
  _text_77:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CompanyComponent0,renderType_CompanyComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CompanyComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'pm-header',new import4.InlineArray2(2,'theme','theme-light'),this.debug(0,0,0));
    this.compView_0 = new import11.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import11.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(1,0,43));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'section',new import4.InlineArray2(2,'class','main'),this.debug(2,2,0));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',this.debug(3,2,22));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','container'),this.debug(4,3,4));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',this.debug(5,3,27));
    this._el_6 = import4.createRenderElement(this.renderer,this._el_4,'div',new import4.InlineArray2(2,'class','message'),this.debug(6,4,8));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',this.debug(7,4,29));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_6,'h1',import4.EMPTY_INLINE_ARRAY,this.debug(8,5,12));
    this._text_9 = this.renderer.createText(this._el_8,'Hi',this.debug(9,5,16));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_8,'br',import4.EMPTY_INLINE_ARRAY,this.debug(10,5,18));
    this._text_11 = this.renderer.createText(this._el_8,'we are Slamby',this.debug(11,5,22));
    this._text_12 = this.renderer.createText(this._el_6,'\n            ',this.debug(12,5,40));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_6,'p',new import4.InlineArray2(2,'class','lead'),this.debug(13,6,12));
    this._text_14 = this.renderer.createText(this._el_13,'Hard work, great team, gorgeous vision. Building the best data management products from the heart.',this.debug(14,6,28));
    this._text_15 = this.renderer.createText(this._el_6,'\n        ',this.debug(15,6,130));
    this._text_16 = this.renderer.createText(this._el_4,'\n    ',this.debug(16,7,14));
    this._text_17 = this.renderer.createText(this._el_2,'\n',this.debug(17,8,10));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(18,9,10));
    this._el_19 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','container'),this.debug(19,11,0));
    this._text_20 = this.renderer.createText(this._el_19,'\n    ',this.debug(20,11,23));
    this._el_21 = import4.createRenderElement(this.renderer,this._el_19,'div',new import4.InlineArray2(2,'class','row'),this.debug(21,12,4));
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',this.debug(22,12,21));
    this._el_23 = import4.createRenderElement(this.renderer,this._el_21,'div',new import4.InlineArray2(2,'class','col-md-12'),this.debug(23,13,8));
    this._text_24 = this.renderer.createText(this._el_23,'\n            ',this.debug(24,13,31));
    this._el_25 = import4.createRenderElement(this.renderer,this._el_23,'h2',import4.EMPTY_INLINE_ARRAY,this.debug(25,14,12));
    this._text_26 = this.renderer.createText(this._el_25,'Our vision',this.debug(26,14,16));
    this._text_27 = this.renderer.createText(this._el_23,'\n            ',this.debug(27,14,31));
    this._el_28 = import4.createRenderElement(this.renderer,this._el_23,'p',new import4.InlineArray2(2,'class','lead'),this.debug(28,15,12));
    this._text_29 = this.renderer.createText(this._el_28,'We are passionate in creating the best data processing solutions. Following our vision, we are working to become the biggest data processing center over Europe.',this.debug(29,15,28));
    this._text_30 = this.renderer.createText(this._el_23,'\n        ',this.debug(30,15,192));
    this._text_31 = this.renderer.createText(this._el_21,'\n    ',this.debug(31,16,14));
    this._text_32 = this.renderer.createText(this._el_19,'\n    ',this.debug(32,17,10));
    this._el_33 = import4.createRenderElement(this.renderer,this._el_19,'div',new import4.InlineArray2(2,'class','row'),this.debug(33,18,4));
    this._text_34 = this.renderer.createText(this._el_33,'\n        ',this.debug(34,18,21));
    this._el_35 = import4.createRenderElement(this.renderer,this._el_33,'div',new import4.InlineArray2(2,'class','col-md-12'),this.debug(35,19,8));
    this._text_36 = this.renderer.createText(this._el_35,'\n            ',this.debug(36,19,31));
    this._el_37 = import4.createRenderElement(this.renderer,this._el_35,'h2',import4.EMPTY_INLINE_ARRAY,this.debug(37,20,12));
    this._text_38 = this.renderer.createText(this._el_37,'From the begining',this.debug(38,20,16));
    this._text_39 = this.renderer.createText(this._el_35,'\n            ',this.debug(39,20,38));
    this._el_40 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(40,21,12));
    this._text_41 = this.renderer.createText(this._el_40,'Slamby was started in 2011, and officially incorporated on 11th October 2013.',this.debug(41,21,28));
    this._text_42 = this.renderer.createText(this._el_35,'\n            ',this.debug(42,21,109));
    this._el_43 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(43,22,12));
    this._text_44 = this.renderer.createText(this._el_43,'Our first vision was to build a sophisticated, smart technology that by reading and understanding written text - can protect children from adult online content. Building the first machine-learning technology Slamby realized its capability to extend its market, providing improved data-processing solutions for industrial clients.',this.debug(44,22,28));
    this._text_45 = this.renderer.createText(this._el_35,'\n           ',this.debug(45,22,361));
    this._el_46 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(46,23,11));
    this._text_47 = this.renderer.createText(this._el_46,'In 2013 Slamby continued its RnD activity and built several products to international companies.',this.debug(47,23,27));
    this._text_48 = this.renderer.createText(this._el_35,'\n           ',this.debug(48,23,127));
    this._el_49 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(49,24,11));
    this._text_50 = this.renderer.createText(this._el_49,'In 2014 Slamby released its first machine learning solution for e-commerce market, it was called Slamby Classifier - the first truly language independent classification engine with high accuracy level.',this.debug(50,24,27));
    this._text_51 = this.renderer.createText(this._el_35,'\n           ',this.debug(51,24,232));
    this._el_52 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(52,25,11));
    this._text_53 = this.renderer.createText(this._el_52,'In 2015 Slamby became a significant global data processing solution provider, serving clients over 9 countries.',this.debug(53,25,27));
    this._text_54 = this.renderer.createText(this._el_35,'\n           ',this.debug(54,25,142));
    this._el_55 = import4.createRenderElement(this.renderer,this._el_35,'p',new import4.InlineArray2(2,'class','lead'),this.debug(55,26,11));
    this._text_56 = this.renderer.createText(this._el_55,'In 2016 Slamby continued its expansion with increased RnD activity & product development. We changed our product development strategy, transforming our products into open-source, providing a wide range of free solutions that make us even better. Instead of providing a shared solution, we continue our developments creating the best personalized, dedicated data processing servers serving both cloud and on-premise needs as well.',this.debug(56,26,27));
    this._text_57 = this.renderer.createText(this._el_35,'\n        ',this.debug(57,26,460));
    this._text_58 = this.renderer.createText(this._el_33,'\n    ',this.debug(58,27,14));
    this._text_59 = this.renderer.createText(this._el_19,'\n    ',this.debug(59,28,10));
    this._el_60 = import4.createRenderElement(this.renderer,this._el_19,'div',new import4.InlineArray2(2,'class','row'),this.debug(60,29,4));
    this._text_61 = this.renderer.createText(this._el_60,'\n        ',this.debug(61,29,21));
    this._el_62 = import4.createRenderElement(this.renderer,this._el_60,'div',new import4.InlineArray2(2,'class','col-md-12'),this.debug(62,30,8));
    this._text_63 = this.renderer.createText(this._el_62,'\n            ',this.debug(63,30,31));
    this._el_64 = import4.createRenderElement(this.renderer,this._el_62,'h2',import4.EMPTY_INLINE_ARRAY,this.debug(64,31,12));
    this._text_65 = this.renderer.createText(this._el_64,'Join us',this.debug(65,31,16));
    this._text_66 = this.renderer.createText(this._el_62,'\n            ',this.debug(66,31,28));
    this._el_67 = import4.createRenderElement(this.renderer,this._el_62,'p',new import4.InlineArray2(2,'class','lead'),this.debug(67,32,12));
    this._text_68 = this.renderer.createText(this._el_67,'We are looking for passionate talents. If you like to join us, please check our latest available positions, or schedule an appointment to meet the Team.',this.debug(68,32,28));
    this._text_69 = this.renderer.createText(this._el_62,'\n            ',this.debug(69,32,184));
    this._el_70 = import4.createRenderElement(this.renderer,this._el_62,'p',import4.EMPTY_INLINE_ARRAY,this.debug(70,33,12));
    this._text_71 = this.renderer.createText(this._el_70,'\n                ',this.debug(71,33,15));
    this._el_72 = import4.createRenderElement(this.renderer,this._el_70,'a',new import4.InlineArray16(10,'angulartics2On','click','angularticsCategory','company-page','angularticsEvent','join-btn-pushed','class','btn btn-default btn-lg','href','mailto:jobs@slamby.com'),this.debug(72,34,16));
    this._text_73 = this.renderer.createText(this._el_72,'Join',this.debug(73,34,173));
    this._text_74 = this.renderer.createText(this._el_70,'\n            ',this.debug(74,34,181));
    this._text_75 = this.renderer.createText(this._el_62,'\n        ',this.debug(75,35,16));
    this._text_76 = this.renderer.createText(this._el_60,'\n    ',this.debug(76,36,14));
    this._text_77 = this.renderer.createText(this._el_19,'\n',this.debug(77,37,10));
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
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._text_69,
      this._el_70,
      this._text_71,
      this._el_72,
      this._text_73,
      this._text_74,
      this._text_75,
      this._text_76,
      this._text_77
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,11);
    const currVal_0_0_0:any = 'theme-light';
    this._HeaderComponent_0_3.check_theme(currVal_0_0_0,throwOnChange,false);
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
}