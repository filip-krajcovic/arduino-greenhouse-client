export const callApi = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, init)
  const data = await response.json()
  return data
}
