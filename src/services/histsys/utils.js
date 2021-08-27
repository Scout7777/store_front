
export const toQueryString = (payload) => {
  return Object.keys(payload).map(k => {
    return encodeURIComponent(k) + '=' + encodeURIComponent(payload[k])
  }).join('&')
}

export const toSearchPayload = (payload) => {
  console.log(payload)
  const current = payload.current || 1
  const pageSize = payload.pageSize || 10
  const sort = payload.sort || {}
  delete payload.current
  delete payload.pageSize
  delete payload.sort
  return {
    current,
    pageSize,
    sort,
    filter: {...payload},
  }
}
