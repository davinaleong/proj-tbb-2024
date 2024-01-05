import { now, logFunction, getElement, DATA_ACTIVE_ATTR } from "./helpers"
import { Config } from "./config"

/// Interfaces
export interface ElementsInterface {
  togglePrimaryHeader(): void
  renderCopyright(): void
}

/// Functions
// Print the copyright's year based on now.
export function renderCopyright(): void {
  logFunction(`renderCopyright`)

  // Format: The Beloved's Blog &copy; Davina Leong, 2022-2024
  const copyrightEl: HTMLElement | null = getElement(`copyright`)
  if (!copyrightEl) return
  const yearHtml =
    Config.year === now.getFullYear()
      ? `${Config.year}`
      : `${Config.year} &ndash; ${now.getFullYear()}`

  copyrightEl.innerHTML = `
        ${Config.appName} &copy; ${Config.author}, ${yearHtml}
        `
}

// Toggles the primary header based on the buttons clicked.
export function togglePrimaryHeader(): void {
  logFunction(`togglePrimaryHeader`)

  const primaryHeaderEl = getElement(`primary-header`)
  if (!primaryHeaderEl) return

  primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)

  const btnMenuEl = getElement(`primary-header__btn-menu`, primaryHeaderEl)
  const btnCloseEl = getElement(`primary-header__btn-close`, primaryHeaderEl)

  if (!btnMenuEl || !btnCloseEl) return

  btnMenuEl.addEventListener(`click`, function (event) {
    event.preventDefault()

    primaryHeaderEl.setAttribute(DATA_ACTIVE_ATTR, String(true))
  })

  btnCloseEl.addEventListener(`click`, function (event) {
    event.preventDefault()

    primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)
  })
}

export const elements: ElementsInterface = {
  renderCopyright,
  togglePrimaryHeader,
}
