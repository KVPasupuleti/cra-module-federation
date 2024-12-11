import * as Comlink from "comlink";

class FaceDetectionWorker {
    name;

    constructor() {
        this.name = "Face Detection Worker";
    }
}

Comlink.expose(FaceDetectionWorker);
