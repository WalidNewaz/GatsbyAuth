import * as React from "react"
import { useContext } from "react"
import { LevelContext } from "./LevelContext"

const Section: React.FC<{ isFancy?: Boolean, children: any }> = ({ children, isFancy }) => {
    const level = useContext(LevelContext);
    return (
        <section className={
            'section margin-1 ' +
            (isFancy ? 'fancy' : '')
          }>
            <LevelContext.Provider value={level + 1}>
            {children}
            </LevelContext.Provider>
        </section>
    )
}

export default Section