export declare class DomHelper {
    static body(): HTMLBodyElement;
    static makeDiv(): HTMLDivElement;
    static make(tag: keyof HTMLElementTagNameMap): HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | HTMLHeadElement | HTMLAreaElement | HTMLObjectElement | HTMLLinkElement | HTMLMapElement | HTMLInputElement | HTMLBaseElement | HTMLTimeElement | HTMLDataElement | HTMLProgressElement | HTMLTrackElement | HTMLSourceElement | HTMLButtonElement | HTMLAudioElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLFieldSetElement | HTMLHeadingElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLSelectElement | HTMLSlotElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTitleElement | HTMLTableRowElement | HTMLUListElement;
    static get(id: string): HTMLElement | null;
    static appentToBody(element: HTMLElement): void;
    static makeDivWith(content: string): HTMLDivElement;
}
