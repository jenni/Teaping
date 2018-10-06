# Teaping API. :construction:

## Endpoints

* [Get all workers](#get-all-stops)
* [Give tip](#give-tip)
* [Get pot](#get-pot)

### Get all workers

``` http
GET /api/workers
```

Example:

``` http
GET /api/workers
[
    {
        "_id": "5bb8a24ccaa2d29e44f7fb5e",
        "name": "Jen",
        "hash": "2312234234234234",
        "workerId": 1,
        "__v": 0
    },
    {
        "_id": "5bb8a24ccaa2d29e44f7fb5f",
        "name": "Masa",
        "hash": "56756767867789",
        "workerId": 2,
        "__v": 0
    }
]

```

### Give tip

``` http
POST /api/pot
```

Example:

``` http
POST api/pot/5bb8ab88af4ba8e6dd6e2a14

{
    "hash": "324235235345",
    "quantity": 0.5
}

```

### Get pot

``` http
GET api/pot
```

Example:

``` http
GET api/pot

[
    {
        "_id": "5bb8ab88af4ba8e6dd6e2a14",
        "name": "main-wallet",
        "hash": "23122342ddaafba",
        "quantity": 1,
        "__v": 0
    }
]
```

