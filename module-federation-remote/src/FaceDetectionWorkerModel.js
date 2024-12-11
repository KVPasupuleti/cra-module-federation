import { wrap } from "comlink";
import logWorker from "./log.worker";
class FaceDetectionWorkerModel {
    constructor() {
        this.place = "Hyd";
    }

    initWorker = async () => {
        try {
            const worker = new Worker(new URL("./worker.js", import.meta.url), {
                type: module,
            });
            const FaceDetectionWorkerClass = wrap(worker);

            //@ts-ignore
            this.faceDetectionWorker = await new FaceDetectionWorkerClass();
            console.log("NAME", this.faceDetectionWorker.name);
        } catch (error) {
            console.log("Error:", error);
        }
    };
    initLogWorker = async () => {
        try {
            const workerBlob = new Blob([logWorker], {
                type: "application/javascript",
            });
            const workerURL = URL.createObjectURL(workerBlob);
            this.logWorker = new Worker(workerURL);

            this.logWorker.postMessage("Log Worker initialized successfully.");
        } catch (error) {
            console.log("Error initializing Log Worker:", error);
        }
    };
}

export default FaceDetectionWorkerModel;
