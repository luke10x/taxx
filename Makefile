up-app:
	docker-compose up -d --force-recreate app

logs:
	docker-compose logs -f

into-app:
	docker-compose exec app bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .