import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {TextList} from "./TextList";

export const TextShow = () => {
    const [texts, setTexts] = useState([])
    const {loading, request} = useHttp()

    const fetchText = useCallback(async () => {
        try {
            const fetched = await request('/api/text/gettext', 'GET', null, {

            })
            setTexts(fetched)
        } catch (e) {}
    }, [request])


    useEffect(() => {
        fetchText()
    }, [fetchText])


    return (
        <>
            {<TextList texts={texts} />}
        </>
    )
}
