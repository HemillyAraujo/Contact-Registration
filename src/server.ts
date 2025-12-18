import { SetupApplication } from './app';

class Server {
    static start(): void {
        const application = new SetupApplication(5432);
        application.init();
        application.start();
    }
}

Server.start();