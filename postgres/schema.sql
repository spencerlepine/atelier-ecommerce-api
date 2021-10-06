-- ---
-- Table 'product'
--
-- ---

-- DROP DATABASE IF EXISTS sdc;

-- CREATE DATABASE sdc;

-- \c sdc;

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