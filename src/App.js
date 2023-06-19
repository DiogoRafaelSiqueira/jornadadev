import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
       <div className='app__videos'>
          <Video
            likes={100}
            messages={200}
            shares={300}
            name="Diogo"
            description="omega3"
            music="storyteller"
            url="https://assets.designs.ai/videos/videomaker_sample3.mp4"
          />
          <Video
            likes={110}
            messages={210}
            shares={310}
            name="Diogo Rafael"
            description="Gato interagindo"
            music="storyteller Singer"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
          />
          

       </div>
    </div>
  );
}

export default App;
