interface IFilters {
  age: string
  energy: string
  size: string
  independency: string
}

export function buildQueryParams(filters: IFilters, type: string) {
  const queryParams = []

  if (filters.age) queryParams.push(`age=${filters.age}`)
  if (filters.energy) queryParams.push(`energy=${filters.energy}`)
  if (filters.size) queryParams.push(`size=${filters.size}`)
  if (filters.independency)
    queryParams.push(`independency=${filters.independency}`)

  if (type) queryParams.push(`type=${type}`)

  return queryParams.join('&')
}

export function buildQuery(city: string, params: string) {
  return params ? `${city}?${params}` : city
}
