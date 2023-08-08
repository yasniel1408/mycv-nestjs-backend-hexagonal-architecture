import { setupApp } from '@setup-app';
import { AppModule } from '@app/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ConfigService } from '@nestjs/config';
describe('Auth signin (e2e)', () => {
  let app: INestApplication;
  const email = 'test@gmail.com';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [ConfigService],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app);
    await app.init();
  });

  it('handles a signin request / (POST)', async () => {
    await request(app.getHttpServer())
      .post('/api/v1/auth/signup')
      .send({ email, password: 'test' })
      .expect(201)
      .then((res) => {
        const { id, email: emailNewUser } = res.body;
        expect(id).toBeDefined();
        expect(emailNewUser).toEqual(email);
      });

    return request(app.getHttpServer())
      .post('/api/v1/auth/signin')
      .send({ email, password: 'test' })
      .expect(200)
      .then((res) => {
        const { token } = res.body;
        expect(token).toBeDefined();
      });
  });
});
