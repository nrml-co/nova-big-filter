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

The default 'Per Page' filter does not show up in the card.  So, if you add the card but don't have any 
filters, you wont see anything.  Add some filters and it will show up.  

It's worth nothing that this makes life easier by not having to click and scroll through the default filter.
The code relies heavilly on the deafult Nova .vue and .css files.  So you may have to play with placement of your 
filters to get things looking great.  For instance, Date Filters look best on the bottom.  

It won't grow forever.  There is a max of 350 px at which point it turns into a scroll view.  

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

![Nova Big Filter Screenshot](https://raw.githubusercontent.com/nrml-co/nova-big-filter/master/resources/img/nova-big-filter.png)
