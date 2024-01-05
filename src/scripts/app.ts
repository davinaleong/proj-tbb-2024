console.log(`app.js loaded`)
import "../styles/app.scss"
import { logFunction } from "./helpers"
import { renderCopyright, togglePrimaryHeader } from "./elements"

async function main() {
  logFunction(`main`)

  togglePrimaryHeader()
  renderCopyright()
}

document.addEventListener(`DOMContentLoaded`, main)
