import { setupApp } from '@setup-app';
import { AppModule } from '@app/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

describe('Auth signout (e2e)', () => {
  let app: INestApplication;
  const email = 'test@gmail.com';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app);
    await app.init();
  });

  it('handles a signout request / (POST)', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/signout')
      .send({ email, password: 'test' })
      .set(
        'Authorization',
        'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2OTEzNjk2ODl9.tnCeh4KgF68oJW5xjXL9EErdRpcAi0XSnFYOryEAHRs',
      )
      .expect(200)
      .then((res) => {
        const { ok } = res.body;
        expect(ok).toBeDefined();
        expect(ok).toBeTruthy();
      });
  });
});
