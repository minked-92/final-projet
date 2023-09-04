<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230607143751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(25) NOT NULL, mail VARCHAR(50) NOT NULL, password VARCHAR(15) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ac_activities CHANGE context context JSON NOT NULL, CHANGE batch batch VARCHAR(191) DEFAULT NULL, CHANGE payload payload JSON DEFAULT NULL, CHANGE resourceLocale resourceLocale VARCHAR(191) DEFAULT NULL, CHANGE resourceWebspaceKey resourceWebspaceKey VARCHAR(191) DEFAULT NULL, CHANGE resourceTitle resourceTitle VARCHAR(191) DEFAULT NULL, CHANGE resourceTitleLocale resourceTitleLocale VARCHAR(191) DEFAULT NULL, CHANGE resourceSecurityContext resourceSecurityContext VARCHAR(191) DEFAULT NULL, CHANGE resourceSecurityObjectType resourceSecurityObjectType VARCHAR(191) DEFAULT NULL, CHANGE resourceSecurityObjectId resourceSecurityObjectId VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE ca_categories CHANGE category_key category_key VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE ca_category_meta CHANGE locale locale VARCHAR(5) DEFAULT NULL');
        $this->addSql('ALTER TABLE co_accounts CHANGE externalId externalId VARCHAR(255) DEFAULT NULL, CHANGE number number VARCHAR(255) DEFAULT NULL, CHANGE corporation corporation VARCHAR(255) DEFAULT NULL, CHANGE uid uid VARCHAR(50) DEFAULT NULL, CHANGE registerNumber registerNumber VARCHAR(255) DEFAULT NULL, CHANGE placeOfJurisdiction placeOfJurisdiction VARCHAR(255) DEFAULT NULL, CHANGE mainEmail mainEmail VARCHAR(255) DEFAULT NULL, CHANGE mainPhone mainPhone VARCHAR(255) DEFAULT NULL, CHANGE mainFax mainFax VARCHAR(255) DEFAULT NULL, CHANGE mainUrl mainUrl VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE co_addresses CHANGE title title VARCHAR(250) DEFAULT NULL, CHANGE street street VARCHAR(150) DEFAULT NULL, CHANGE number number VARCHAR(60) DEFAULT NULL, CHANGE addition addition VARCHAR(60) DEFAULT NULL, CHANGE zip zip VARCHAR(60) DEFAULT NULL, CHANGE city city VARCHAR(60) DEFAULT NULL, CHANGE state state VARCHAR(60) DEFAULT NULL, CHANGE countryCode countryCode VARCHAR(5) DEFAULT NULL, CHANGE postboxNumber postboxNumber VARCHAR(100) DEFAULT NULL, CHANGE postboxPostcode postboxPostcode VARCHAR(100) DEFAULT NULL, CHANGE postboxCity postboxCity VARCHAR(100) DEFAULT NULL, CHANGE latitude latitude DOUBLE PRECISION DEFAULT NULL, CHANGE longitude longitude DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE co_bank_account CHANGE bankName bankName VARCHAR(150) DEFAULT NULL, CHANGE bic bic VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE co_contacts CHANGE middleName middleName VARCHAR(60) DEFAULT NULL, CHANGE birthday birthday DATE DEFAULT NULL, CHANGE salutation salutation VARCHAR(255) DEFAULT NULL, CHANGE gender gender VARCHAR(1) DEFAULT NULL, CHANGE mainEmail mainEmail VARCHAR(255) DEFAULT NULL, CHANGE mainPhone mainPhone VARCHAR(255) DEFAULT NULL, CHANGE mainFax mainFax VARCHAR(255) DEFAULT NULL, CHANGE mainUrl mainUrl VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE me_collection_types CHANGE collection_type_key collection_type_key VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE me_collections CHANGE style style VARCHAR(255) DEFAULT NULL, CHANGE collection_key collection_key VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE me_file_versions CHANGE mimeType mimeType VARCHAR(191) DEFAULT NULL, CHANGE properties properties VARCHAR(1000) DEFAULT NULL');
        $this->addSql('ALTER TABLE pr_preview_links CHANGE options options JSON NOT NULL, CHANGE lastVisit lastVisit DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE se_permissions CHANGE module module VARCHAR(60) DEFAULT NULL');
        $this->addSql('ALTER TABLE se_role_settings CHANGE value value JSON NOT NULL');
        $this->addSql('ALTER TABLE se_roles CHANGE role_key role_key VARCHAR(60) DEFAULT NULL');
        $this->addSql('ALTER TABLE se_users CHANGE lastLogin lastLogin DATETIME DEFAULT NULL, CHANGE confirmationKey confirmationKey VARCHAR(128) DEFAULT NULL, CHANGE passwordResetToken passwordResetToken VARCHAR(80) DEFAULT NULL, CHANGE passwordResetTokenExpiresAt passwordResetTokenExpiresAt DATETIME DEFAULT NULL, CHANGE privateKey privateKey VARCHAR(2000) DEFAULT NULL, CHANGE apiKey apiKey CHAR(36) DEFAULT NULL COMMENT \'(DC2Type:guid)\', CHANGE email email VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE tr_trash_item_translations CHANGE locale locale VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE tr_trash_items CHANGE restoreData restoreData JSON NOT NULL, CHANGE restoreType restoreType VARCHAR(191) DEFAULT NULL, CHANGE restoreOptions restoreOptions JSON NOT NULL, CHANGE resourceSecurityContext resourceSecurityContext VARCHAR(191) DEFAULT NULL, CHANGE resourceSecurityObjectType resourceSecurityObjectType VARCHAR(191) DEFAULT NULL, CHANGE resourceSecurityObjectId resourceSecurityObjectId VARCHAR(191) DEFAULT NULL, CHANGE defaultLocale defaultLocale VARCHAR(191) DEFAULT NULL');
        $this->addSql('ALTER TABLE we_analytics CHANGE content content JSON NOT NULL');
        $this->addSql('ALTER TABLE phpcr_type_nodes CHANGE primary_item primary_item VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE phpcr_type_props CHANGE default_value default_value VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE phpcr_type_childs CHANGE default_type default_type VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE ac_activities CHANGE context context LONGTEXT NOT NULL COLLATE `utf8mb4_bin`, CHANGE batch batch VARCHAR(191) DEFAULT \'NULL\', CHANGE payload payload LONGTEXT DEFAULT NULL COLLATE `utf8mb4_bin`, CHANGE resourceLocale resourceLocale VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceWebspaceKey resourceWebspaceKey VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceTitle resourceTitle VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceTitleLocale resourceTitleLocale VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceSecurityContext resourceSecurityContext VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceSecurityObjectType resourceSecurityObjectType VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceSecurityObjectId resourceSecurityObjectId VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE ca_categories CHANGE category_key category_key VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE ca_category_meta CHANGE locale locale VARCHAR(5) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE co_accounts CHANGE externalId externalId VARCHAR(255) DEFAULT \'NULL\', CHANGE number number VARCHAR(255) DEFAULT \'NULL\', CHANGE corporation corporation VARCHAR(255) DEFAULT \'NULL\', CHANGE uid uid VARCHAR(50) DEFAULT \'NULL\', CHANGE registerNumber registerNumber VARCHAR(255) DEFAULT \'NULL\', CHANGE placeOfJurisdiction placeOfJurisdiction VARCHAR(255) DEFAULT \'NULL\', CHANGE mainEmail mainEmail VARCHAR(255) DEFAULT \'NULL\', CHANGE mainPhone mainPhone VARCHAR(255) DEFAULT \'NULL\', CHANGE mainFax mainFax VARCHAR(255) DEFAULT \'NULL\', CHANGE mainUrl mainUrl VARCHAR(255) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE co_addresses CHANGE title title VARCHAR(250) DEFAULT \'NULL\', CHANGE street street VARCHAR(150) DEFAULT \'NULL\', CHANGE number number VARCHAR(60) DEFAULT \'NULL\', CHANGE addition addition VARCHAR(60) DEFAULT \'NULL\', CHANGE zip zip VARCHAR(60) DEFAULT \'NULL\', CHANGE city city VARCHAR(60) DEFAULT \'NULL\', CHANGE state state VARCHAR(60) DEFAULT \'NULL\', CHANGE countryCode countryCode VARCHAR(5) DEFAULT \'NULL\', CHANGE postboxNumber postboxNumber VARCHAR(100) DEFAULT \'NULL\', CHANGE postboxPostcode postboxPostcode VARCHAR(100) DEFAULT \'NULL\', CHANGE postboxCity postboxCity VARCHAR(100) DEFAULT \'NULL\', CHANGE latitude latitude DOUBLE PRECISION DEFAULT \'NULL\', CHANGE longitude longitude DOUBLE PRECISION DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE co_bank_account CHANGE bankName bankName VARCHAR(150) DEFAULT \'NULL\', CHANGE bic bic VARCHAR(100) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE co_contacts CHANGE middleName middleName VARCHAR(60) DEFAULT \'NULL\', CHANGE birthday birthday DATE DEFAULT \'NULL\', CHANGE salutation salutation VARCHAR(255) DEFAULT \'NULL\', CHANGE gender gender VARCHAR(1) DEFAULT \'NULL\', CHANGE mainEmail mainEmail VARCHAR(255) DEFAULT \'NULL\', CHANGE mainPhone mainPhone VARCHAR(255) DEFAULT \'NULL\', CHANGE mainFax mainFax VARCHAR(255) DEFAULT \'NULL\', CHANGE mainUrl mainUrl VARCHAR(255) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE me_collection_types CHANGE collection_type_key collection_type_key VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE me_collections CHANGE style style VARCHAR(255) DEFAULT \'NULL\', CHANGE collection_key collection_key VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE me_file_versions CHANGE mimeType mimeType VARCHAR(191) DEFAULT \'NULL\', CHANGE properties properties VARCHAR(1000) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE phpcr_type_childs CHANGE default_type default_type VARCHAR(255) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE phpcr_type_nodes CHANGE primary_item primary_item VARCHAR(255) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE phpcr_type_props CHANGE default_value default_value VARCHAR(255) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE pr_preview_links CHANGE options options LONGTEXT NOT NULL COLLATE `utf8mb4_bin`, CHANGE lastVisit lastVisit DATETIME DEFAULT \'NULL\' COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE se_permissions CHANGE module module VARCHAR(60) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE se_role_settings CHANGE value value LONGTEXT NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE se_roles CHANGE role_key role_key VARCHAR(60) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE se_users CHANGE lastLogin lastLogin DATETIME DEFAULT \'NULL\', CHANGE confirmationKey confirmationKey VARCHAR(128) DEFAULT \'NULL\', CHANGE passwordResetToken passwordResetToken VARCHAR(80) DEFAULT \'NULL\', CHANGE passwordResetTokenExpiresAt passwordResetTokenExpiresAt DATETIME DEFAULT \'NULL\', CHANGE privateKey privateKey VARCHAR(2000) DEFAULT \'NULL\', CHANGE apiKey apiKey CHAR(36) DEFAULT \'NULL\' COMMENT \'(DC2Type:guid)\', CHANGE email email VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE tr_trash_item_translations CHANGE locale locale VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE tr_trash_items CHANGE restoreData restoreData LONGTEXT NOT NULL COLLATE `utf8mb4_bin`, CHANGE restoreType restoreType VARCHAR(191) DEFAULT \'NULL\', CHANGE restoreOptions restoreOptions LONGTEXT NOT NULL COLLATE `utf8mb4_bin`, CHANGE resourceSecurityContext resourceSecurityContext VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceSecurityObjectType resourceSecurityObjectType VARCHAR(191) DEFAULT \'NULL\', CHANGE resourceSecurityObjectId resourceSecurityObjectId VARCHAR(191) DEFAULT \'NULL\', CHANGE defaultLocale defaultLocale VARCHAR(191) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE we_analytics CHANGE content content LONGTEXT NOT NULL COLLATE `utf8mb4_bin`');
    }
}
