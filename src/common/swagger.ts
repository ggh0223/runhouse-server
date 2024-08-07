import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('MCESOS API Docs')
    .setDescription('MCESOS web service API description')
    .setExternalDoc(
      'OpenAPI 3.0.0',
      'https://docs.nestjs.com/openapi/introduction',
    )
    .setVersion('1.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [],
  });
  SwaggerModule.setup('api-docs', app, document);
}
