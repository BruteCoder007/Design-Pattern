import {MultimediaFacade} from './MultimediaFacade';
// Client code
function main(): void {
    const facade = new MultimediaFacade();
    facade.playMovie("2.mp3", "3.mp4", "1.jpg");
}

main();
