import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1692199497672 implements MigrationInterface {
  name = 'NewMigration1692199497672';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\``);
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`refreshToken\``);
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`approved\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`lat\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`lng\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`mileage\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`model\``);
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`model\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`lng\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`lat\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`mileage\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`approved\` tinyint NOT NULL DEFAULT 0`);
    await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`User\` ADD \`refreshToken\` varchar(500) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`User\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`Report\` DROP FOREIGN KEY \`FK_abc8ce53e6ef1567f06400344fd\``);
    await queryRunner.query(`ALTER TABLE \`Report\` CHANGE \`userId\` \`userId\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`isAdmin\` \`isAdmin\` tinyint NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`isAdmin\` \`isAdmin\` tinyint NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE \`User\` CHANGE \`createdAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`User\` ADD UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` (\`email\`)`);
    await queryRunner.query(
      `ALTER TABLE \`User\` CHANGE \`createdAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Report\` ADD CONSTRAINT \`FK_abc8ce53e6ef1567f06400344fd\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Report\` DROP FOREIGN KEY \`FK_abc8ce53e6ef1567f06400344fd\``);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`User\` DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\``);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`isAdmin\` \`isAdmin\` tinyint NOT NULL DEFAULT '1'`);
    await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`isAdmin\` \`isAdmin\` tinyint NOT NULL DEFAULT '1'`);
    await queryRunner.query(`ALTER TABLE \`Report\` CHANGE \`userId\` \`userId\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`Report\` ADD CONSTRAINT \`FK_abc8ce53e6ef1567f06400344fd\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`refreshToken\``);
    await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`approved\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`mileage\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`lat\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`lng\``);
    await queryRunner.query(`ALTER TABLE \`Report\` DROP COLUMN \`model\``);
    await queryRunner.query(`ALTER TABLE \`User\` ADD \`name\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`model\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`mileage\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`lng\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`lat\` int NULL`);
    await queryRunner.query(`ALTER TABLE \`Report\` ADD \`approved\` tinyint NOT NULL DEFAULT '0'`);
    await queryRunner.query(
      `ALTER TABLE \`User\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`User\` ADD \`refreshToken\` varchar(500) NULL`);
    await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\` (\`email\`)`);
  }
}
