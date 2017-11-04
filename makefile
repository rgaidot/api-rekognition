.PHONY: install test run clean

install: install-npm

install-npm:
	@echo 'API - Installing NPM dependencies $(NODE_ENV)'
	@npm $(if $(filter production staging,$(NODE_ENV)),--production,) install

test:
	@echo "API - Tests"
	@NODE_ENV=test npm test

npm-check:
	@echo 'API - Check NPM'
	@./node_modules/.bin/npm-check -u

bump-version-npm:
	@echo 'API - Bump version NPM packages'
	@npm upgrade

clean:
	@echo 'API - Delete node_modules directory'
	@rm -rf ./node_modules
	@rm package-lock.json

prettier:
	@echo 'Start prettier API'
	@./node_modules/.bin/prettier --write "{config,src}/**/*.js"

run:
	@echo 'Start API'
	@npm start