cd resources/k6-tests

NOW=`date '+%F_%H:%M:%S'`
mkdir "test_${NOW}"

# Output to folders:
ENDPOINT=products k6 run ./k6.js > "test_${NOW}/products.md"
ENDPOINT=products/42370/styles k6 run ./k6.js > "test_${NOW}/styles.md"
ENDPOINT=products/42370/related k6 run ./k6.js > "test_${NOW}/related.md"

# Print to the console:
# ENDPOINT=products k6 run ./k6.js
# ENDPOINT=products/42370/styles k6 run ./k6.js
# ENDPOINT=products/42370/related k6 run ./k6.js
