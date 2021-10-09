-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS "product" CASCADE;

CREATE TABLE "product" (
  "id" INT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "slogan" VARCHAR(1000) NOT NULL,
  "description" VARCHAR(1000) NOT NULL,
  "category" VARCHAR(1000) NOT NULL,
  "default_price" INTEGER NOT NULL,
  "created_at" DATE NOT NULL,
  "updated_at" DATE NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS "features" CASCADE;

CREATE TABLE "features" (
  "id" INTEGER NOT NULL,
  "product_id" INT NOT NULL,
  "feature" VARCHAR(100) NOT NULL,
  "value" VARCHAR(100),
  PRIMARY KEY ("id")
);

-- ---
-- Table 'style'
--
-- ---

DROP TABLE IF EXISTS "style" CASCADE;

CREATE TABLE "style" (
  "id" INTEGER NOT NULL,
  "product_id" INTEGER NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "sale_price" INTEGER DEFAULT NULL,
  "original_price" INTEGER NOT NULL,
  "default?" BYTEA NOT NULL DEFAULT 'true',
  PRIMARY KEY ("id")
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS "photos" CASCADE;

CREATE TABLE "photos" (
  "id" INTEGER NOT NULL,
  "style_id" INTEGER NOT NULL,
  "thumbnail_url" VARCHAR(1000) NOT NULL,
  "url" VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS "skus" CASCADE;

CREATE TABLE "skus" (
  "id" INTEGER NOT NULL,
  "style_id" INTEGER NOT NULL,
  "size" VARCHAR(20) NOT NULL,
  "quantity" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'related'
--
-- ---

DROP TABLE IF EXISTS "related" CASCADE;

CREATE TABLE "related" (
  "id" INTEGER NOT NULL,
  "current_product_id" INT NOT NULL,
  "related_product_id" INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "style" ADD FOREIGN KEY (product_id) REFERENCES "product" ("id");
ALTER TABLE "features" ADD FOREIGN KEY (product_id) REFERENCES "product" ("id");
ALTER TABLE "photos" ADD FOREIGN KEY (style_id) REFERENCES "style" ("id");
ALTER TABLE "skus" ADD FOREIGN KEY (style_id) REFERENCES "style" ("id");
ALTER TABLE "related" ADD FOREIGN KEY (current_product_id) REFERENCES "product" ("id");

-- ---
-- Table Properties
-- ---

-- ALTER TABLE "product" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "features" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "related" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "style" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "photos" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "skus" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "related" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO "product" ("id","campus","name","slogan","description","category","default_price","created_at","updated_at") VALUES
-- ('','','','','','','','','');
-- INSERT INTO "features" ("id","product_id","feature","value") VALUES
-- ('','','','');
-- INSERT INTO "related" ("id","related") VALUES
-- ('','');
-- INSERT INTO "style" ("id","name","original_price","sale_price","default?","style_id") VALUES
-- ('','','','','','');
-- INSERT INTO "photos" ("id","styleId","thumbnail_url","url") VALUES
-- ('','','','');
-- INSERT INTO "skus" ("id","styleId","quantity","size") VALUES
-- ('','','','');
-- INSERT INTO "related" ("id","current_product_id","related_product_id") VALUES
-- ('','','');