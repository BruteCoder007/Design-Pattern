export class VideoProcessor {
    private videoPlayer: HTMLVideoElement;
    constructor() {
                this.videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;
            }
    loadVideo(file: string): void {
        console.log(`Loading video from ${file}`);
        this.videoPlayer.src = file;
    }

}

