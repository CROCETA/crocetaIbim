import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
    <div class="container">

        <div class="retangulo">
            <div class="moeda">
                <img src="./biticoin.png" alt="">
            </div>
        </div>

        <div class="foto">
            <img src="./nft.jpeg" alt="">
        </div>
        <div>
            <div>
                <div></div>
                <div class="quadradofundo">
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        <img class="vendido" src="./vendido.png" alt="">
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        <img class="vendido" src="./vendido.png" alt="">
                    </div>
                   
                </div>
            </div>s

            <div>
                <div class="quadradofundo">
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                       
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        <img class="vendido" src="./vendido.png" alt="">
                    </div>
                </div>
            </div>


            <div>
                <div class="quadradofundo">
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                        <img class="vendido" src="./vendido.png" alt="">
                    </div>
                    <div class="foto2">
                        <img src="./7705305.jpg" alt="">
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="quadradobaixo">
          
          <div style="display: flex;">
            <div class="youtube">
                <img src="./logo youtube.png" alt="">
            </div>
            <div class="instagram">
                <img src="./logo instagram.png" alt="">
            </div>
            
        </div>
            <div class="texto">
                <p> rdfd</p>
            
            </div>
        </div>


    </div>
</body>
    </>
  )
}

export default App
