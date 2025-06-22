# Comprehensive CSS Reference Sheet with Parameters and Examples

## Selectors
- `*`: Universal selector, selects all elements.
- `element`: Type selector, selects all elements of given type (e.g., `p`, `div`).
- `.class`: Class selector, selects all elements with the specified class.
- `#id`: ID selector, selects the element with the specified ID.
- `element.class`: Selects elements of a specific type with a specific class.
- `element, element`: Grouping selector, selects all specified elements.
- `element > element`: Child selector, selects direct children.
- `element element`: Descendant selector, selects all descendants.
- `element + element`: Adjacent sibling selector.
- `element ~ element`: General sibling selector.
- `:hover`, `:focus`, `:active`: Pseudo-classes for user interaction.
- `::before`, `::after`: Pseudo-elements for inserting content.

## Box Model Properties
- `width`, `height`
  - Parameters: length values (px, em, %, etc.)
  - Example: `width: 100px; height: 50px;`
- `margin`
  - Parameters: length or auto; can specify one to four values for top, right, bottom, left.
  - Example: `margin: 10px 20px 10px 20px;`
- `padding`
  - Parameters: length values; similar to margin.
  - Example: `padding: 5px 10px;`
- `border`
  - Parameters: width, style, color.
  - Example: `border: 1px solid black;`
- `box-sizing`
  - Parameters: `content-box` (default), `border-box`.
  - Example: `box-sizing: border-box;`

## Text and Font Properties
- `color`
  - Parameters: color names, hex, rgb, rgba, hsl.
  - Example: `color: #333333;`
- `font-family`
  - Parameters: font names, generic families.
  - Example: `font-family: Arial, sans-serif;`
- `font-size`
  - Parameters: length, percentage, keywords.
  - Example: `font-size: 16px;`
- `font-weight`
  - Parameters: normal, bold, 100-900.
  - Example: `font-weight: bold;`
- `font-style`
  - Parameters: normal, italic, oblique.
  - Example: `font-style: italic;`
- `line-height`
  - Parameters: number, length, percentage.
  - Example: `line-height: 1.5;`
- `text-align`
  - Parameters: left, right, center, justify.
  - Example: `text-align: center;`
- `text-decoration`
  - Parameters: none, underline, overline, line-through.
  - Example: `text-decoration: underline;`
- `text-transform`
  - Parameters: none, uppercase, lowercase, capitalize.
  - Example: `text-transform: uppercase;`
- `letter-spacing`
  - Parameters: length.
  - Example: `letter-spacing: 2px;`
- `word-spacing`
  - Parameters: length.
  - Example: `word-spacing: 5px;`

## Background and Color
- `background-color`
  - Parameters: color values.
  - Example: `background-color: #f0f0f0;`
- `background-image`
  - Parameters: URL or gradients.
  - Example: `background-image: url('image.jpg');`
- `background-repeat`
  - Parameters: repeat, no-repeat, repeat-x, repeat-y.
  - Example: `background-repeat: no-repeat;`
- `background-position`
  - Parameters: position keywords or length.
  - Example: `background-position: center center;`
- `background-size`
  - Parameters: length, cover, contain.
  - Example: `background-size: cover;`
- `opacity`
  - Parameters: 0 (transparent) to 1 (opaque).
  - Example: `opacity: 0.5;`

## Display and Positioning
- `display`
  - Parameters: block, inline, inline-block, flex, grid, none.
  - Example: `display: flex;`
- `position`
  - Parameters: static, relative, absolute, fixed, sticky.
  - Example: `position: absolute;`
- `top`, `right`, `bottom`, `left`
  - Parameters: length or auto.
  - Example: `top: 10px; left: 20px;`
- `z-index`
  - Parameters: integer.
  - Example: `z-index: 10;`
- `float`
  - Parameters: left, right, none.
  - Example: `float: left;`
- `clear`
  - Parameters: none, left, right, both.
  - Example: `clear: both;`
- `overflow`
  - Parameters: visible, hidden, scroll, auto.
  - Example: `overflow: hidden;`

## Flexbox Properties
- `display: flex`
  - Enables flexbox layout.
- `flex-direction`
  - Parameters: row, column, row-reverse, column-reverse.
  - Example: `flex-direction: row;`
- `justify-content`
  - Parameters: flex-start, flex-end, center, space-between, space-around.
  - Example: `justify-content: center;`
- `align-items`
  - Parameters: flex-start, flex-end, center, baseline, stretch.
  - Example: `align-items: center;`
- `flex-wrap`
  - Parameters: nowrap, wrap, wrap-reverse.
  - Example: `flex-wrap: wrap;`
- `flex-grow`, `flex-shrink`, `flex-basis`
  - Parameters: number, length.
  - Example: `flex-grow: 1;`
- `order`
  - Parameters: integer.
  - Example: `order: 2;`

## Grid Properties
- `display: grid`
  - Enables grid layout.
- `grid-template-columns`, `grid-template-rows`
  - Parameters: track sizes (length, %, auto).
  - Example: `grid-template-columns: 1fr 2fr;`
- `grid-gap`, `gap`
  - Parameters: length.
  - Example: `gap: 10px;`
- `grid-column`, `grid-row`
  - Parameters: line numbers or span.
  - Example: `grid-column: 1 / span 2;`
- `justify-items`, `align-items`
  - Parameters: start, end, center, stretch.
  - Example: `justify-items: center;`

## List Properties
- `list-style-type`
  - Parameters: disc, circle, square, decimal, none.
  - Example: `list-style-type: square;`
- `list-style-position`
  - Parameters: inside, outside.
  - Example: `list-style-position: inside;`
- `list-style-image`
  - Parameters: URL.
  - Example: `list-style-image: url('marker.png');`

## Table Properties
- `border-collapse`
  - Parameters: collapse, separate.
  - Example: `border-collapse: collapse;`
- `border-spacing`
  - Parameters: length.
  - Example: `border-spacing: 5px;`
- `table-layout`
  - Parameters: auto, fixed.
  - Example: `table-layout: fixed;`

## Animation and Transition
- `transition`
  - Parameters: property, duration, timing-function, delay.
  - Example: `transition: all 0.3s ease;`
- `animation`
  - Parameters: name, duration, timing-function, delay, iteration-count, direction.
  - Example: `animation: slidein 3s ease-in-out;`
- `transform`
  - Parameters: rotate, scale, translate, skew.
  - Example: `transform: rotate(45deg);`

## Other Common Properties
- `cursor`
  - Parameters: pointer, default, move, text, wait, etc.
  - Example: `cursor: pointer;`
- `visibility`
  - Parameters: visible, hidden, collapse.
  - Example: `visibility: hidden;`
- `box-shadow`
  - Parameters: offset-x, offset-y, blur-radius, spread-radius, color.
  - Example: `box-shadow: 2px 2px 5px rgba(0,0,0,0.3);`
- `text-shadow`
  - Parameters: offset-x, offset-y, blur-radius, color.
  - Example: `text-shadow: 1px 1px 2px black;`
- `vertical-align`
  - Parameters: baseline, sub, super, top, middle, bottom.
  - Example: `vertical-align: middle;`
- `white-space`
  - Parameters: normal, nowrap, pre, pre-wrap, pre-line.
  - Example: `white-space: nowrap;`
- `word-wrap`
  - Parameters: normal, break-word.
  - Example: `word-wrap: break-word;`
- `resize`
  - Parameters: none, both, horizontal, vertical.
  - Example: `resize: both;`

---

This reference sheet covers a wide range of CSS properties and selectors from basic to advanced, with parameters and examples to serve as a comprehensive guide.
