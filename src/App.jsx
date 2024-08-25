import './App.css'
import Card from './Card'



function App() {

  let myImages = ["/images/pic1.jpg","/images/pic2.jpg","/images/pic3.jpg", "/images/pic4.jpg","/images/pic5.jpg","/images/pic6.jpg","/images/pic7.jpg","/images/pic8.jpg",]
  
  

  let myName = {
  name_1: "CARD1",
  name_2: "CARD2",
  name_3: "CARD3",
  name_4: "CARD4",
  name_5: "CARD5",
  name_6: "CARD6",
  name_7: "CARD7",
  name_8: "CARD8",
  }
  

  return (
    <>
      <div className='flex flex-wrap justify-items-center bg-gray-800 w-full h-screen'>
        <div className="text-white w-full">ALL THE ITEMS ARE HERE</div>
        <div className='p-2 flex flex-wrap flex-direction-column w-full h-svh gap-4 justify-evenly'>
          <div className="w-1/5 h-1/3"><Card username={myName.name_1} userimage={myImages[1]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_2} userimage={myImages[2]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_3} userimage={myImages[3]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_4} userimage={myImages[4]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_5} userimage={myImages[5]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_6} userimage={myImages[6]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_7} userimage={myImages[7]} /></div>
          <div className="w-1/5 h-1/3"><Card username={myName.name_8} userimage={myImages[1]} /></div>
        </div>
      </div>
    </>
  )
}

export default App
