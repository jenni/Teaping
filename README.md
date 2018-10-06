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
PUT /api/pot
```

Example:

``` http
PUT api/pot/5bb8ab88af4ba8e6dd6e2a14

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

### Distribute payment

``` http
PUT /api/pot/:wallet/distribute
```

Example:

``` http
PUT api/pot/5bb8ab88af4ba8e6dd6e2a14/distribute

Will distribute the quantity of the pot between the workers.

[
    {
        "_id": "5bb8ab88af4ba8e6dd6e2a12",
        "name": "Emsoft",
        "hash": "3253544534646546",
        "workerId": 5,
        "__v": 0,
        "quantity": 4.333333333333333
    },
    {
        "_id": "5bb8ab88af4ba8e6dd6e2a13",
        "name": "Melanie",
        "hash": "3253544534646546",
        "workerId": 6,
        "__v": 0,
        "quantity": 4.333333333333333
    }
]
```