ALTER TABLE product DISABLE TRIGGER ALL;
Truncate product CASCADE;
ALTER TABLE product ENABLE TRIGGER ALL;
 \copy product FROM '/private/tmp/product.csv' DELIMITER '|' CSV HEADER;

ALTER TABLE features DISABLE TRIGGER ALL;
Truncate features CASCADE;
ALTER TABLE features ENABLE TRIGGER ALL;
\copy features FROM '/private/tmp/features.csv' DELIMITER '|' CSV HEADER;

ALTER TABLE related DISABLE TRIGGER ALL;
Truncate related CASCADE;
ALTER TABLE related ENABLE TRIGGER ALL;
\copy related FROM '/private/tmp/related.csv' DELIMITER '|' CSV HEADER;

ALTER TABLE style DISABLE TRIGGER ALL;
Truncate style CASCADE;
ALTER TABLE style ENABLE TRIGGER ALL;
\copy style FROM '/private/tmp/style.csv' DELIMITER '|' CSV HEADER;

ALTER TABLE skus DISABLE TRIGGER ALL;
Truncate skus CASCADE;
ALTER TABLE skus ENABLE TRIGGER ALL;
\copy skus FROM '/private/tmp/skus.csv' DELIMITER '|' CSV HEADER;

ALTER TABLE photos DISABLE TRIGGER ALL;
Truncate photos CASCADE;
ALTER TABLE photos ENABLE TRIGGER ALL;
\copy photos FROM '/private/tmp/photos.csv' DELIMITER '|' CSV HEADER;
