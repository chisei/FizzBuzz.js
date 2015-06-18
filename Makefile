all:
	npm install

test:
	./node_modules/mocha/bin/mocha tests/
