import React, {useState, useEffect, useRef} from 'react'

const style = {
    main: `flex flex-col p-[10px] relative`
}
const chat = () => {
    const scroll = userRef()
    return (
        <>
            <main className={style.name}>chat
                {}
            </main>
            {}
            <span ref={scroll}></span>
        </>

    )
}

export default chat