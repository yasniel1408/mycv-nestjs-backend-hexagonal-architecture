prod:
	docker-compose up -d --force-recreate

dev:
	docker compose -f docker-compose-dev.yml up --force-recreate

sq:
	docker compose -f docker-compose-sq.yml up --force-recreate

down-prod:
	docker compose down

down-dev:
	docker compose -f docker-compose-dev.yml down

down-sq:
	docker compose -f docker-compose-sq.yml down

logs:
	docker-compose logs -f

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .
