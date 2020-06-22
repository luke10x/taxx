up-app:
	docker-compose up -d --force-recreate app

up-sync:
	docker-compose up -d --force-recreate sync

logs:
	docker-compose logs -f

into-app:
	docker-compose exec app bash

into-sync:
	docker-compose exec sync bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .