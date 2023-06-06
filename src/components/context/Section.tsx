import * as React from "react"
import { LevelContext } from "./LevelContext"

const Section: React.FC<{ level: number, children: any }> = ({ level, children }) => {
    return (
        <section className="section box">
            <LevelContext.Provider value={level}>
            {children}
            </LevelContext.Provider>
        </section>
    )
}

export default Section