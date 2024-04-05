import {AudioProcessor} from './AudioProcessor';
import {ImageProcessor} from './ImageProcessor';
import {VideoProcessor} from './VideoProcessor';

// Facade class
export class MultimediaFacade {
    private audioProcessor: AudioProcessor;
    private videoProcessor: VideoProcessor;
    private imageProcessor: ImageProcessor;

    constructor() {
        this.audioProcessor = new AudioProcessor();
        this.videoProcessor = new VideoProcessor();
        this.imageProcessor = new ImageProcessor();
    }

    playMovie(audioFile: string, videoFile: string, imageFile: string): void {
        this.audioProcessor.loadAudio(audioFile);
        this.videoProcessor.loadVideo(videoFile);
        this.imageProcessor.loadImage(imageFile);

    }
}