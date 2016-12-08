/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './insight.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './insight.component.css.shim';
import * as import10 from '../common/header/header.component';
import * as import11 from '../common/header/header.component.ngfactory';
export class Wrapper_InsightComponent {
  /*private*/ _eventHandler:Function;
  context:import0.InsightComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.InsightComponent();
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
const nodeDebugInfos_InsightComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.InsightComponent],import0.InsightComponent,{})];
var renderType_InsightComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_InsightComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.InsightComponent>;
  _InsightComponent_0_3:Wrapper_InsightComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InsightComponent_Host0,renderType_InsightComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_InsightComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'ng-component',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_InsightComponent0(this.viewUtils,this,0,this._el_0);
    this._InsightComponent_0_3 = new Wrapper_InsightComponent();
    this.compView_0.create(this._InsightComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._InsightComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InsightComponent) && (0 === requestNodeIndex))) { return this._InsightComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._InsightComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const InsightComponentNgFactory:import8.ComponentFactory<import0.InsightComponent> = new import8.ComponentFactory<import0.InsightComponent>('ng-component',View_InsightComponent_Host0,import0.InsightComponent);
const styles_InsightComponent:any[] = [import9.styles];
const nodeDebugInfos_InsightComponent0:import2.StaticNodeDebugInfo[] = [
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
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_InsightComponent:import3.RenderComponentType = import4.createRenderComponentType('/home/peter/Desktop/git/angular2-aot-webpack/src/app/insight/insight.component.html',0,import5.ViewEncapsulation.Emulated,styles_InsightComponent,{});
export class View_InsightComponent0 extends import1.DebugAppView<import0.InsightComponent> {
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
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _el_57:any;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_InsightComponent0,renderType_InsightComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_InsightComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'pm-header',import4.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this.compView_0 = new import11.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import11.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(1,0,23));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'section',new import4.InlineArray2(2,'class','header'),this.debug(2,2,0));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',this.debug(3,2,24));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','container'),this.debug(4,3,4));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',this.debug(5,3,27));
    this._el_6 = import4.createRenderElement(this.renderer,this._el_4,'div',new import4.InlineArray2(2,'class','message'),this.debug(6,4,8));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',this.debug(7,4,29));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_6,'div',new import4.InlineArray2(2,'class','head'),this.debug(8,5,12));
    this._text_9 = this.renderer.createText(this._el_8,'\n                ',this.debug(9,5,30));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_8,'h1',import4.EMPTY_INLINE_ARRAY,this.debug(10,6,16));
    this._text_11 = this.renderer.createText(this._el_10,'A smart way to work',this.debug(11,6,20));
    this._text_12 = this.renderer.createText(this._el_8,'\n                ',this.debug(12,6,44));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_8,'p',new import4.InlineArray2(2,'class','lead'),this.debug(13,7,16));
    this._text_14 = this.renderer.createText(this._el_13,'\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusamus quia, illo unde voluptate voluptates saepe. Commodi, molestias nihil laudantium officia hic. Hic dignissimos recusandae ullam, error fugit, dolores tempore!\n                ',this.debug(14,7,32));
    this._text_15 = this.renderer.createText(this._el_8,'\n                ',this.debug(15,9,20));
    this._el_16 = import4.createRenderElement(this.renderer,this._el_8,'a',new import4.InlineArray16(12,'angulartics2On','click','angularticsCategory','Insight','angularticsEvent','Download General','angularticsProperties','{label: \'General\'}','class','btn btn-default','href','https://insight.slamby.com'),this.debug(16,10,16));
    this._text_17 = this.renderer.createText(this._el_16,'Download',this.debug(17,10,209));
    this._text_18 = this.renderer.createText(this._el_8,'\n                ',this.debug(18,10,221));
    this._el_19 = import4.createRenderElement(this.renderer,this._el_8,'div',new import4.InlineArray2(2,'class','list'),this.debug(19,11,16));
    this._text_20 = this.renderer.createText(this._el_19,'\n                    ',this.debug(20,11,34));
    this._el_21 = import4.createRenderElement(this.renderer,this._el_19,'a',new import4.InlineArray2(2,'href','https://instight.slamby.com/mac'),this.debug(21,12,20));
    this._text_22 = this.renderer.createText(this._el_21,'Download for Mac',this.debug(22,12,62));
    this._text_23 = this.renderer.createText(this._el_19,'\n                    ',this.debug(23,12,82));
    this._el_24 = import4.createRenderElement(this.renderer,this._el_19,'a',new import4.InlineArray2(2,'href','https://instight.slamby.com/windows'),this.debug(24,13,20));
    this._text_25 = this.renderer.createText(this._el_24,'Download for Windows',this.debug(25,13,66));
    this._text_26 = this.renderer.createText(this._el_19,'\n                    ',this.debug(26,13,90));
    this._el_27 = import4.createRenderElement(this.renderer,this._el_19,'a',new import4.InlineArray2(2,'href','https://instight.slamby.com/linux'),this.debug(27,14,20));
    this._text_28 = this.renderer.createText(this._el_27,'Download for Linux',this.debug(28,14,64));
    this._text_29 = this.renderer.createText(this._el_19,'\n                ',this.debug(29,14,86));
    this._text_30 = this.renderer.createText(this._el_8,'\n                ',this.debug(30,15,22));
    this._el_31 = import4.createRenderElement(this.renderer,this._el_8,'div',new import4.InlineArray2(2,'class','github'),this.debug(31,16,16));
    this._text_32 = this.renderer.createText(this._el_31,'\n                    ',this.debug(32,16,36));
    this._el_33 = import4.createRenderElement(this.renderer,this._el_31,'a',new import4.InlineArray4(4,'href','https://github.com/slamby/slamby-insight','target','_blank'),this.debug(33,17,20));
    this._el_34 = import4.createRenderElement(this.renderer,this._el_33,'i',new import4.InlineArray4(4,'aria-hidden','true','class','fa fa-github'),this.debug(34,17,87));
    this._text_35 = this.renderer.createText(this._el_31,'\n                ',this.debug(35,17,138));
    this._text_36 = this.renderer.createText(this._el_8,'\n            ',this.debug(36,18,22));
    this._text_37 = this.renderer.createText(this._el_6,'\n        ',this.debug(37,19,18));
    this._text_38 = this.renderer.createText(this._el_4,'\n    ',this.debug(38,20,14));
    this._text_39 = this.renderer.createText(this._el_2,'\n',this.debug(39,21,10));
    this._text_40 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(40,22,10));
    this._el_41 = import4.createRenderElement(this.renderer,parentRenderNode,'section',import4.EMPTY_INLINE_ARRAY,this.debug(41,24,0));
    this._text_42 = this.renderer.createText(this._el_41,'\n    ',this.debug(42,24,9));
    this._el_43 = import4.createRenderElement(this.renderer,this._el_41,'div',new import4.InlineArray2(2,'class','container'),this.debug(43,25,4));
    this._text_44 = this.renderer.createText(this._el_43,'\n        ',this.debug(44,25,27));
    this._el_45 = import4.createRenderElement(this.renderer,this._el_43,'form',new import4.InlineArray16(14,'action','//slamby.us8.list-manage.com/subscribe/post?u=2cc8f967bed26c6531c44c771&id=f805acd7c9','class','validate form','id','mc-embedded-subscribe-form','method','post','name','mc-embedded-subscribe-form','novalidate','','target','_blank'),this.debug(45,26,8));
    this._text_46 = this.renderer.createText(this._el_45,'\n            ',this.debug(46,26,242));
    this._el_47 = import4.createRenderElement(this.renderer,this._el_45,'div',new import4.InlineArray2(2,'class','form-group'),this.debug(47,27,12));
    this._text_48 = this.renderer.createText(this._el_47,'\n                ',this.debug(48,27,36));
    this._el_49 = import4.createRenderElement(this.renderer,this._el_47,'label',new import4.InlineArray2(2,'for','mce-EMAIL'),this.debug(49,28,16));
    this._text_50 = this.renderer.createText(this._el_49,'Email Address',this.debug(50,28,39));
    this._el_51 = import4.createRenderElement(this.renderer,this._el_49,'span',new import4.InlineArray2(2,'class','asterisk'),this.debug(51,28,52));
    this._text_52 = this.renderer.createText(this._el_51,'*',this.debug(52,28,75));
    this._text_53 = this.renderer.createText(this._el_47,'\n                ',this.debug(53,28,91));
    this._el_54 = import4.createRenderElement(this.renderer,this._el_47,'input',new import4.InlineArray16(10,'class','form-control','id','mce-EMAIL','name','EMAIL','type','email','value',''),this.debug(54,29,16));
    this._text_55 = this.renderer.createText(this._el_47,'\n            ',this.debug(55,29,94));
    this._text_56 = this.renderer.createText(this._el_45,'\n            ',this.debug(56,30,18));
    this._el_57 = import4.createRenderElement(this.renderer,this._el_45,'div',new import4.InlineArray2(2,'class','form-group'),this.debug(57,31,12));
    this._text_58 = this.renderer.createText(this._el_57,'\n                ',this.debug(58,31,36));
    this._el_59 = import4.createRenderElement(this.renderer,this._el_57,'label',new import4.InlineArray2(2,'for','mce-FNAME'),this.debug(59,32,16));
    this._text_60 = this.renderer.createText(this._el_59,'First Name ',this.debug(60,32,39));
    this._text_61 = this.renderer.createText(this._el_57,'\n                ',this.debug(61,32,58));
    this._el_62 = import4.createRenderElement(this.renderer,this._el_57,'input',new import4.InlineArray16(10,'class','form-control','id','mce-FNAME','name','FNAME','type','text','value',''),this.debug(62,33,16));
    this._text_63 = this.renderer.createText(this._el_57,'\n            ',this.debug(63,33,93));
    this._text_64 = this.renderer.createText(this._el_45,'\n            ',this.debug(64,34,18));
    this._el_65 = import4.createRenderElement(this.renderer,this._el_45,'div',new import4.InlineArray2(2,'class','form-group'),this.debug(65,35,12));
    this._text_66 = this.renderer.createText(this._el_65,'\n                ',this.debug(66,35,36));
    this._el_67 = import4.createRenderElement(this.renderer,this._el_65,'input',new import4.InlineArray16(12,'angulartics2On','click','angularticsCategory','Marketing','angularticsEvent','NewsletterSignUp','class','btn btn-default','type','submit','value','Submit'),this.debug(67,36,16));
    this._text_68 = this.renderer.createText(this._el_65,'\n            ',this.debug(68,36,167));
    this._text_69 = this.renderer.createText(this._el_45,'\n        ',this.debug(69,37,18));
    this._text_70 = this.renderer.createText(this._el_43,'\n    ',this.debug(70,38,15));
    this._text_71 = this.renderer.createText(this._el_41,'\n',this.debug(71,39,10));
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
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._el_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._text_69,
      this._text_70,
      this._text_71
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
}