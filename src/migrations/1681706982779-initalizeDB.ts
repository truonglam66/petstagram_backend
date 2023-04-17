import { MigrationInterface, QueryRunner } from "typeorm";

export class initalizeDB1681706982779 implements MigrationInterface {
    name = 'initalizeDB1681706982779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_e98e8b5f905ec09fb1ddc3556f8\` ON \`message\``);
        await queryRunner.query(`DROP INDEX \`FK_fdfe54a21d1542c564384b74d5c\` ON \`message\``);
        await queryRunner.query(`DROP INDEX \`FK_1eecf7aa7c723ac45dcd0bb0d9a\` ON \`message_object\``);
        await queryRunner.query(`DROP INDEX \`FK_3a9af414ceda1005752bf11c1eb\` ON \`message_object\``);
        await queryRunner.query(`DROP INDEX \`FK_202dd1a76b3c630eda8f21dc883\` ON \`notify\``);
        await queryRunner.query(`DROP INDEX \`FK_9e697afb27cb1fab6032ff63b6e\` ON \`notify\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`apartmentId\``);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`roomId\``);
        await queryRunner.query(`ALTER TABLE \`message_object\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`notify\` DROP COLUMN \`jobId\``);
        await queryRunner.query(`ALTER TABLE \`notify\` DROP COLUMN \`jobDailyId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`photoUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followerId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followingId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`residentId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fcmToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatarUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`postId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`content\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`postId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`photoUrl\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`title\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followingId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fullName\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`residentId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fcmToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatarUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followerId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_d72ea127f30e21753c9e229891e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_3394a5669cfb3c85cea4b368fca\` FOREIGN KEY (\`postId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_3394a5669cfb3c85cea4b368fca\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_d72ea127f30e21753c9e229891e\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followerId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatarUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fcmToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`residentId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`followingId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`photoUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`postId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`postId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`content\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`type\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`title\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatarUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fcmToken\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`residentId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fullName\` varchar(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`username\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followingId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`followerId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`photoUrl\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notify\` ADD \`jobDailyId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`notify\` ADD \`jobId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message_object\` ADD \`employeeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`roomId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`apartmentId\` varchar(36) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\` (\`username\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_9e697afb27cb1fab6032ff63b6e\` ON \`notify\` (\`jobId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_202dd1a76b3c630eda8f21dc883\` ON \`notify\` (\`jobDailyId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_3a9af414ceda1005752bf11c1eb\` ON \`message_object\` (\`employeeId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_1eecf7aa7c723ac45dcd0bb0d9a\` ON \`message_object\` (\`residentId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_fdfe54a21d1542c564384b74d5c\` ON \`message\` (\`roomId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_e98e8b5f905ec09fb1ddc3556f8\` ON \`message\` (\`apartmentId\`)`);
    }

}
