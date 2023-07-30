import { setupApp } from '@src/setup-app';
import { AppModule } from '@app/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await setupApp(app);
    await app.init();
  });

  it('handles a signup request / (POST)', () => {
    const email = 'test@gmail.com';
    return request(app.getHttpServer())
      .post('/api/v1/auth/signup')
      .send({ email, password: 'test' })
      .expect(201)
      .then((res) => {
        const { id, email: emailNewUser } = res.body;
        expect(id).toBeDefined();
        expect(emailNewUser).toEqual(email);
      });
  });
});
