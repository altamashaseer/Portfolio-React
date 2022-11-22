import React, { useEffect } from 'react'
import './Background.css'
import Particles from 'particlesjs';

function Background() {
    useEffect(() => {
        Particles.init
            ({
                selector: '.background',
                connectParticles: true,
                speed: 0.7,
                maxParticles: 80,
                responsive: [
                    {
                        breakpoint: 800,
                        options: {
                            maxParticles: 60,
                        }
                    },
                    {
                        breakpoint: 500,
                        options: {
                            maxParticles: 40,
                        }
                    }]
            });
    }, [])

    return (
        <div className='bg-wrapper'>
            <canvas class="background" id='background'></canvas>
        </div>
    )
}

export default Background
