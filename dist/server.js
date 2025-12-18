"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Server {
    static start() {
        const application = new app_1.SetupApplication(5432);
        application.init();
        application.start();
    }
}
Server.start();
//# sourceMappingURL=server.js.map