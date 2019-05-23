<?php

namespace NrmlCo\NovaBigFilter;

use Laravel\Nova\Card;

class NovaBigFilter extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    /**
     * Indicates that the analytics should show current visitors.
     *
     * @param $title
     *
     * @return $this
     */
    public function setTitle($title = 'Filter Menux')
    {
        return $this->withMeta([
            'filterMenuTitle' => $title
        ]);
    }

    /**
     * Set maximum height of the filter block
     *
     * @param int $height
     *
     * @return $this
     */
    public function setMaxHeight($height = 350)
    {
        return $this->withMeta([
            'filterMaxHeight' => $height
        ]);
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-big-filter';
    }
}
