up-app:
	docker-compose up -d --force-recreate app

up-sync:
	docker-compose up -d --force-recreate sync

up: up-app up-sync

logs:
	docker-compose logs -f

install-app:
	docker-compose run app "npm install"

install-sync:
	docker-compose run sync "npm install"

install: install-app install-sync

into-app:
	docker-compose exec app bash

into-sync:
	docker-compose 	exec sync bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .