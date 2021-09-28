-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `campus` VARCHAR(8) NULL DEFAULT 'hr-lax',
  `name` VARCHAR(50) NOT NULL,
  `slogan` VARCHAR(70) NOT NULL,
  `description` VARCHAR(325) NOT NULL,
  `category` VARCHAR(15) NOT NULL,
  `default_price` VARCHAR(8) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  `features` SET NOT NULL,
  `styles_id` INTEGER NOT NULL,
  `related_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`),
KEY ()
);

-- ---
-- Table 'product styles'
--
-- ---

DROP TABLE IF EXISTS `product styles`;

CREATE TABLE `product styles` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NOT NULL,
  `results` SET NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `feature` VARCHAR(40) NOT NULL,
  `value` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'related'
--
-- ---

DROP TABLE IF EXISTS `related`;

CREATE TABLE `related` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `related` SET NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'styles'
--
-- ---

DROP TABLE IF EXISTS `styles`;

CREATE TABLE `styles` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(40) NOT NULL,
  `original_price` VARCHAR(8) NOT NULL,
  `sale_price` INTEGER NOT NULL DEFAULT NULL,
  `default?` BINARY NOT NULL DEFAULT 'true',
  `skus_ids` SET NOT NULL,
  `photos` SET NOT NULL,
  `style_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `thumbnail_url` VARCHAR(300) NOT NULL,
  `url` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS `skus`;

CREATE TABLE `skus` (
  `id` INTEGER NOT NULL,
  `quantity` INTEGER NOT NULL,
  `size` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`id`),
  PRIMARY KEY ()
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `product` ADD FOREIGN KEY (features) REFERENCES `features` (`id`);
ALTER TABLE `product` ADD FOREIGN KEY (styles_id) REFERENCES `product styles` (`id`);
ALTER TABLE `product styles` ADD FOREIGN KEY (results) REFERENCES `styles` (`id`);
ALTER TABLE `styles` ADD FOREIGN KEY (skus_ids) REFERENCES `skus` (`id`);
ALTER TABLE `styles` ADD FOREIGN KEY (photos) REFERENCES `photos` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `product styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `related` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`campus`,`name`,`slogan`,`description`,`category`,`default_price`,`created_at`,`updated_at`,`features`,`styles_id`,`related_id`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `product styles` (`id`,`product_id`,`results`) VALUES
-- ('','','');
-- INSERT INTO `features` (`id`,`feature`,`value`) VALUES
-- ('','','');
-- INSERT INTO `related` (`id`,`related`) VALUES
-- ('','');
-- INSERT INTO `styles` (`id`,`name`,`original_price`,`sale_price`,`default?`,`skus_ids`,`photos`,`style_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `photos` (`id`,`thumbnail_url`,`url`) VALUES
-- ('','','');
-- INSERT INTO `skus` (`id`,`quantity`,`size`) VALUES
-- ('','','');