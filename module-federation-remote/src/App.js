import { useEffect, useState } from "react";
import "./App.css";
import FaceDetectionWorkerModel from "./FaceDetectionWorkerModel";

const faceDetectionWorkerModel = new FaceDetectionWorkerModel();
function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(faceDetectionWorkerModel.place);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => faceDetectionWorkerModel.initWorker()}>
                    Trigger Comlink worker
                </button>
                <button
                    onClick={() => faceDetectionWorkerModel.initLogWorker()}
                >
                    Trigger Raw Worker
                </button>
            </header>
        </div>
    );
}

export default App;
