export class ImageProcessor {
    private Image: HTMLImageElement;
    constructor() {
                this.Image = document.getElementById('imageDisplay') as HTMLImageElement;
            }
    loadImage(file: string): void {
        console.log(`Loading video from ${file}`);
        this.Image.src = file;
    }


}