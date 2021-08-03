export const get = (key) => { 
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

export const set = (key, value) => { 
    localStorage.setItem(key, JSON.stringify(data))
    return value
}
