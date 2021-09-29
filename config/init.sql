-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS "product";

CREATE TABLE "product" (
  "id" INT NOT NULL,
  "campus" VARCHAR(8) NULL DEFAULT 'hr-lax',
  "name" VARCHAR(50) NOT NULL,
  "slogan" VARCHAR(70) NOT NULL,
  "description" VARCHAR(325) NOT NULL,
  "category" VARCHAR(15) NOT NULL,
  "default_price" VARCHAR(8) NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMP NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'styles'
--
-- ---

DROP TABLE IF EXISTS "styles";

CREATE TABLE "styles" (
  "id" INTEGER NOT NULL,
  "product_id" INT NOT NULL,
  "results" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS "features";

CREATE TABLE "features" (
  "id" INTEGER NOT NULL,
  "product_id" INT NOT NULL,
  "feature" VARCHAR(40) NOT NULL,
  "value" VARCHAR(40) NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'style'
--
-- ---

DROP TABLE IF EXISTS "style";

CREATE TABLE "style" (
  "id" INTEGER NOT NULL,
  "name" VARCHAR(40) NOT NULL,
  "original_price" VARCHAR(8) NOT NULL,
  "sale_price" INTEGER NOT NULL DEFAULT NULL,
  "default?" BYTEA NOT NULL DEFAULT 'true',
  "style_id" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS "photos";

CREATE TABLE "photos" (
  "id" INTEGER NOT NULL,
  "style_id" INTEGER NOT NULL,
  "thumbnail_url" VARCHAR(300) NOT NULL,
  "url" VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS "skus";

CREATE TABLE "skus" (
  "id" INTEGER NOT NULL,
  "style_id" INTEGER NOT NULL,
  "quantity" INTEGER NOT NULL,
  "size" VARCHAR(4) NOT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'related'
--
-- ---

DROP TABLE IF EXISTS "related";

CREATE TABLE "related" (
  "id" INTEGER NOT NULL,
  "current_product_id" INT NOT NULL,
  "related_product_id" INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "styles" ADD FOREIGN KEY (product_id) REFERENCES "product" ("id");
ALTER TABLE "styles" ADD FOREIGN KEY (results) REFERENCES "style" ("id");
ALTER TABLE "features" ADD FOREIGN KEY (product_id) REFERENCES "product" ("id");
ALTER TABLE "photos" ADD FOREIGN KEY (style_id) REFERENCES "style" ("id");
ALTER TABLE "skus" ADD FOREIGN KEY (style_id) REFERENCES "style" ("id");
ALTER TABLE "related" ADD FOREIGN KEY (current_product_id) REFERENCES "product" ("id");

-- ---
-- Table Properties
-- ---

-- ALTER TABLE "product" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "styles" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
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
-- INSERT INTO "styles" ("id","product_id","results") VALUES
-- ('','','');
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