console.log(`file: app.js`)

const DATA_ELEMENT_ATTR = `data-element`
const DATA_ACTIVE_ATTR = `data-active`

const API_URL = `https://proj-davinas-cms.test/api/`

async function main() {
  console.log(`fn: main()`)

  toggleMenu()
  subscribeFormHandler()
}

function toggleMenu() {
  console.log(`fn: toggleMenu()`)

  const primaryHeaderEl = getElement(`primary-header`)

  if (!primaryHeaderEl) return

  primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)

  const btnMenuEl = getElement(`primary-header__btn-menu`, primaryHeaderEl)
  if (!btnMenuEl) return
  btnMenuEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    primaryHeaderEl.setAttribute(DATA_ACTIVE_ATTR, `true`)
  })

  const btnCloseEl = getElement(`primary-header__btn-close`, primaryHeaderEl)
  if (!btnCloseEl) return
  btnCloseEl.addEventListener(`click`, function (event) {
    event.preventDefault()
    primaryHeaderEl.removeAttribute(DATA_ACTIVE_ATTR)
  })
}

function getElement(key = ``, parent = null) {
  console.log(`fn: getElement()`, { key, parent })

  if (parent) {
    try {
      return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${key}"]`)
    } catch (error) {
      console.error(error)
    }
  }

  try {
    return document.querySelector(`[${DATA_ELEMENT_ATTR}="${key}"]`)
  } catch (error) {
    console.error(error)
  }
}

function getElements(key = ``, parent = null) {
  console.log(`fn: getElements()`, { key, parent })

  if (parent) {
    try {
      return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${key}"]`)
    } catch (error) {
      console.error(error)
    }
  }

  try {
    return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${key}"]`)
  } catch (error) {
    console.error(error)
  }
}

async function subscribeFormHandler() {
  console.log(`fn: subscribeFormHandler()`)

  const formEl = getElement(`subscribe-form`)
  if (!formEl) return

  formEl.querySelector(`.form__help`).remove()
  formEl.addEventListener(`submit`, async function (event) {
    event.preventDefault()

    const formData = new FormData(formEl)
    if (formData.get("last_name")) return

    const body = {
      email: formData.get(`email`),
    }

    try {
      const response = await fetch(
        `https://proj-davinas-cms.test/api/blog/subscribers`,
        {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
            Accept: `application/json`,
          },
          body: JSON.stringify(body),
        }
      )

      const { status, message } = await response.json()
      const pEl = document.createElement(`p`)
      pEl.classList.add(`form__help`)
      if (status === `SUCCESS`) {
        pEl.classList.add(`text-tbbGreen-700`)
      } else {
        pEl.classList.add(`text-tbbPink-700`)
      }
      pEl.textContent = message
      formEl.appendChild(pEl)

      formEl.reset()
    } catch (error) {
      console.error(`subscribeFormHandler error`, error)
    }
  })
}

document.addEventListener("DOMContentLoaded", main)
