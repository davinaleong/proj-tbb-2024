import { type OptionsInterface, type CmsLibInterface } from "./interfaces.lib"

const { API_URL, APP_SLUG } = import.meta.env

export const METHOD_GET = "GET"
export const METHOD_POST = "POST"

export const MESSAGE_TYPE_URL = `${API_URL}/misc/messageTypes/${APP_SLUG}`
export const MESSAGE_URL = `${API_URL}/misc/messages/${APP_SLUG}`
export const SUBSCRIBER_URL = `${API_URL}/misc/subscribers/${APP_SLUG}`

export const headers = {
  "Content-Type": "application/json",
}

export function options(
  body: any,
  method: string = METHOD_GET,
  headers?: any
): OptionsInterface {
  return {
    method,
    headers,
    body: JSON.stringify(body),
  }
}

export async function fetchMessageTypes(): Promise<any> {
  const response = await fetch(MESSAGE_TYPE_URL)
  return await response.json()
}

export async function fetchMessages(body: any): Promise<any> {
  const response = await fetch(MESSAGE_URL, options(body, METHOD_POST, headers))
  return await response.json()
}

export async function fetchSubscribers(body: any): Promise<any> {
  const response = await fetch(
    SUBSCRIBER_URL,
    options(body, METHOD_POST, headers)
  )
  return await response.json()
}

export const cmsLib: CmsLibInterface = {
  METHOD_GET,
  METHOD_POST,
  MESSAGE_TYPE_URL,
  MESSAGE_URL,
  SUBSCRIBER_URL,
  options,
  fetchMessageTypes,
  fetchMessages,
  fetchSubscribers,
}
