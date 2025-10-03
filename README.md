
# Project Title

## API Reference


#### Add event

```http
  POST /api/event/create
  {
  "name" : string
  "total_searts: integer
  }

```

#### Add booking

```http
  POST /api/reserve/create
  {
  "eventId" : string
  "userId: integer
  }

```


## Deployment

To deploy this project run

```bash
  docker-compose build
  docker-compose up
```

