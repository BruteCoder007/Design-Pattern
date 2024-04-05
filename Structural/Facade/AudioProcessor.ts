

// Subsystem classes
export class AudioProcessor {
    private audioPlayer: HTMLAudioElement;
    constructor() {
                this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
            }
    loadAudio(file: string): void {
        console.log(`Loading audio from ${file}`);
        this.audioPlayer.src = file;

    }


}

