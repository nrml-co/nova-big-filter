## Laravel Nova Big Filter Package

1. [Installation](#user-content-installation)
2. [Usage](#user-content-usage)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer config repositories.nova-big-filter vcs https://github.com/nrml-co/nova-big-filter
composer require nrml-co/nova-big-filter
```

## Usage

You need to add card to resource with specified filter.

```php

use NrmlCo\NovaBigFilter;
use App\Nova\Filters\YourFilter;
use App\Nova\Filters\YourOtherFilter;

public function filters()
{
    return [
        new YourFilter,
        new YourOtherFilter,
    ];
}

public function cards()
{
    return [
        // Other cards...,
        new NovaBigFilter,
    ];
}
```