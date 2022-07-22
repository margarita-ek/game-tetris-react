import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response:any = await fetch(url, {method, body, headers})
            const data:any = await response.json()

            if (!response.ok) {
                let [obj] = data.errors.errors
                throw new Error(obj.msg|| 'The request failed')                    
            }

            setLoading(false)

            return data
        } catch (e:any) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => { setError(null) }

    return { loading, request, error, clearError }
}

