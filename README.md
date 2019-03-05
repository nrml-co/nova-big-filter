## Laravel Nova Big Filter Package

1. [Installation](#user-content-installation)
2. [Usage](#user-content-usage)

## Installation

Install the package in to a [Laravel Nova](https://nova.laravel.com) Project via composer:

```bash
composer require nrml-co/nova-big-filter
```

## Usage

Add the class to the card array of a resource with filters.

```php

use NrmlCo\NovaBigFilter\NovaBigFilter;
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
        new NovaBigFilter,
    ];
}
```