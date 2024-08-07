"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('MCESOS API Docs')
        .setDescription('MCESOS web service API description')
        .setExternalDoc('OpenAPI 3.0.0', 'https://docs.nestjs.com/openapi/introduction')
        .setVersion('1.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        extraModels: [],
    });
    swagger_1.SwaggerModule.setup('api-docs', app, document);
}
//# sourceMappingURL=swagger.js.map