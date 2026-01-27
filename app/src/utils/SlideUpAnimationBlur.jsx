import React from 'react'


export const SlideUpAnimationBlur = {
    initial:{filter:"blur(10px)", opacity:0, y:100},
    whileInView:{filter:"blur(0px)", opacity:1, y:0},
    transition:{duration:0.5},
    viewport:{once:false}
}


