import React from 'react'
import "./SquareComp.css"

interface SquareProps {
    bgColor: string;
    squareCount: number;
    incFunction: () => void;
}

const SquareComp = ({ bgColor, squareCount, incFunction }: SquareProps) => {
    return (
        <section>
            <article
                className={squareCount !==0 && squareCount%10===0? "milestone" : ""}
                style={{ backgroundColor: bgColor }}
                onClick={incFunction}
            >
                {squareCount}
            </article>
        </section>
    )
}

export default SquareComp
