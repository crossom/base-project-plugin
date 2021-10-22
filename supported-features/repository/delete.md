# `Repository.delete()`

Supported features for `.delete()` method

| status      | legend |
| ----------- | :----: |
| implemented |   ✔️   |

## Basic

| feature                                        | supported |
| ---------------------------------------------- | :-------: |
| delete one record (by primary key)             |    ✔️     |
| delete multiple records (by primary keys)      |    ❌     |
| delete one record (simple find)                |    ❌     |
| delete multiple records (simple find)          |    ❌     |
| delete one record (by children)                |    ❌     |
| delete multiple records (by children)          |    ❌     |
| delete one record (with OR condition]())       |    ❌     |
| delete multiple records (with OR condition]()) |    ❌     |

## FindOperators

| operator          | supported |
| ----------------- | :-------: |
| `Between`         |    ❌     |
| `EndsWith`        |    ❌     |
| `Exist`           |    ❌     |
| `In`              |    ❌     |
| `Includes`        |    ❌     |
| `IsNull`          |    ❌     |
| `LessThanOrEqual` |    ❌     |
| `LessThan`        |    ❌     |
| `Like`            |    ❌     |
| `MoreThanOrEqual` |    ❌     |
| `MoreThan`        |    ❌     |
| `Not`             |    ❌     |
| `StartsWith`      |    ❌     |

## Options

| feature | supported |
| ------- | :-------: |
| retries |    ❌     |
| timeout |    ❌     |
