import {useEffect} from "react"

import React from 'react'

export const useTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {
            document.title = prevTitle
        }
    })

}
