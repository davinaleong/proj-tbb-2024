export interface HelpersInterface {
  DATA_ELEMENT_ATTR: string
  DATA_ACTIVE_ATTR: string
  now: Date
  logFunction(name: string, params?: any): void
  logValue(name: string, value: string | number | boolean | null): void
  getElement(name: string, parent?: HTMLElement): HTMLElement | null
  getAllElements(name: string, parent?: HTMLElement): NodeListOf<Element>
  toggleAttribute(element: HTMLElement, toggle: boolean, attr: string): void
}

export const DATA_ELEMENT_ATTR: string = `data-element`
export const DATA_ACTIVE_ATTR: string = `data-active`
export const now: Date = new Date()

export function logFunction(name: string, params?: any = {}): void {
  console.log(`fn: ${name}:(${JSON.stringify(params)})`)
}

export function logValue(
  name: string,
  value: string | number | boolean | null
): void {
  console.log(name, value)
}

export function getElement(
  name: string,
  parent?: HTMLElement
): HTMLElement | null {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function getAllElements(
  name: string,
  parent?: HTMLElement
): NodeListOf<Element> {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function toggleAttribute(
  element: HTMLElement,
  toggle: boolean = false,
  attr: string = DATA_ACTIVE_ATTR
): void {
  logFunction(`toggleAttribute`, { element, toggle, attr })

  if (toggle) {
    element.setAttribute(attr, String(toggle))
  } else {
    element.removeAttribute(attr)
  }
}

export const helpers: HelpersInterface = {
  DATA_ELEMENT_ATTR,
  DATA_ACTIVE_ATTR,
  now,
  logFunction,
  logValue,
  getElement,
  getAllElements,
  toggleAttribute,
}
