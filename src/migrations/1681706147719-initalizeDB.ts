import { MigrationInterface, QueryRunner } from "typeorm";

export class initalizeDB1681706147719 implements MigrationInterface {
    name = 'initalizeDB1681706147719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ab4a80281f1e8d524714e00f38f\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_d38ca7e5fd3994d7d9f88ae1453\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_0cadd01ff1f8932dd95f3f43b05\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_e98e8b5f905ec09fb1ddc3556f8\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_fdfe54a21d1542c564384b74d5c\``);
        await queryRunner.query(`ALTER TABLE \`message_object\` DROP FOREIGN KEY \`FK_1eecf7aa7c723ac45dcd0bb0d9a\``);
        await queryRunner.query(`ALTER TABLE \`message_object\` DROP FOREIGN KEY \`FK_3a9af414ceda1005752bf11c1eb\``);
        await queryRunner.query(`ALTER TABLE \`notify\` DROP FOREIGN KEY \`FK_202dd1a76b3c630eda8f21dc883\``);
        await queryRunner.query(`ALTER TABLE \`notify\` DROP FOREIGN KEY \`FK_9e697afb27cb1fab6032ff63b6e\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_d38ca7e5fd3994d7d9f88ae145\` ON \`user\``);
        await queryRunner.query(`CREATE TABLE \`ward\` (\`id\` varchar(36) NOT NULL, \`createdBy\` varchar(36) NULL, \`createdByName\` varchar(250) NULL, \`updatedBy\` varchar(36) NULL, \`updatedByName\` varchar(250) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`code\` varchar(250) NOT NULL, \`name\` varchar(250) NOT NULL, \`districtId\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`district\` (\`id\` varchar(36) NOT NULL, \`createdBy\` varchar(36) NULL, \`createdByName\` varchar(250) NULL, \`updatedBy\` varchar(36) NULL, \`updatedByName\` varchar(250) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`code\` varchar(250) NOT NULL, \`name\` varchar(250) NOT NULL, \`cityId\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` varchar(36) NOT NULL, \`createdBy\` varchar(36) NULL, \`createdByName\` varchar(250) NULL, \`updatedBy\` varchar(36) NULL, \`updatedByName\` varchar(250) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`code\` varchar(250) NOT NULL, \`name\` varchar(250) NOT NULL, \`area\` varchar(50) NOT NULL DEFAULT '', \`region\` varchar(50) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`archival_file\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`residentId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fcmToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`roles\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`areaId\``);
        await queryRunner.query(`ALTER TABLE \`message_object\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`notify\` DROP COLUMN \`companyId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`photoUrl\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`postId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followerId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followingId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fullName\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`residentId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fcmToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatarUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`title\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`content\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ward\` ADD CONSTRAINT \`FK_19a3bc9b3be291e8b9bc2bb623b\` FOREIGN KEY (\`districtId\`) REFERENCES \`district\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`district\` ADD CONSTRAINT \`FK_148f1c944d0fec4114a54984da1\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_3394a5669cfb3c85cea4b368fca\` FOREIGN KEY (\`postId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_d72ea127f30e21753c9e229891e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_d72ea127f30e21753c9e229891e\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_3394a5669cfb3c85cea4b368fca\``);
        await queryRunner.query(`ALTER TABLE \`district\` DROP FOREIGN KEY \`FK_148f1c944d0fec4114a54984da1\``);
        await queryRunner.query(`ALTER TABLE \`ward\` DROP FOREIGN KEY \`FK_19a3bc9b3be291e8b9bc2bb623b\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatarUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fcmToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`residentId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followingId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followerId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`postId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`photoUrl\``);
        await queryRunner.query(`ALTER TABLE \`notify\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message_object\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`areaId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`roles\` longtext NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fcmToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`residentId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fullName\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`archival_file\` ADD \`companyId\` varchar(36) NULL`);
        await queryRunner.query(`DROP TABLE \`city\``);
        await queryRunner.query(`DROP TABLE \`district\``);
        await queryRunner.query(`DROP TABLE \`ward\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_d38ca7e5fd3994d7d9f88ae145\` ON \`user\` (\`residentId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\` (\`employeeId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\` (\`username\`)`);
        await queryRunner.query(`ALTER TABLE \`notify\` ADD CONSTRAINT \`FK_9e697afb27cb1fab6032ff63b6e\` FOREIGN KEY (\`jobId\`) REFERENCES \`job\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notify\` ADD CONSTRAINT \`FK_202dd1a76b3c630eda8f21dc883\` FOREIGN KEY (\`jobDailyId\`) REFERENCES \`job_daily\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message_object\` ADD CONSTRAINT \`FK_3a9af414ceda1005752bf11c1eb\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message_object\` ADD CONSTRAINT \`FK_1eecf7aa7c723ac45dcd0bb0d9a\` FOREIGN KEY (\`residentId\`) REFERENCES \`resident\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_fdfe54a21d1542c564384b74d5c\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_e98e8b5f905ec09fb1ddc3556f8\` FOREIGN KEY (\`apartmentId\`) REFERENCES \`apartment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD CONSTRAINT \`FK_0cadd01ff1f8932dd95f3f43b05\` FOREIGN KEY (\`areaId\`) REFERENCES \`area\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_d38ca7e5fd3994d7d9f88ae1453\` FOREIGN KEY (\`residentId\`) REFERENCES \`resident\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ab4a80281f1e8d524714e00f38f\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
