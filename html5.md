# Comprehensive HTML5 Reference Sheet with Parameters, Examples, and Usage

## Document Structure Elements
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
  - Usage: Must be the first line in an HTML document to ensure standards mode rendering.
  - Example:
  ```html
  <!DOCTYPE html>
  ```
- `<html lang="en">`: Root element of an HTML page.
  - Parameter: `lang` - Specifies the language of the document (e.g., "en" for English).
  - Usage: Wraps all content; `lang` helps with accessibility and SEO.
  - Example:
  ```html
  <html lang="en">
    <!-- page content -->
  </html>
  ```
- `<head>`: Contains metadata, scripts, styles, and title.
  - Usage: Placed inside `<html>`, contains non-visible info.
  - Example:
  ```html
  <head>
    <title>My Website</title>
  </head>
  ```
- `<title>`: Sets the title of the document.
  - Usage: Appears in browser tab and search engine results.
  - Example:
  ```html
  <title>My Website</title>
  ```
- `<meta>`: Metadata about the document.
  - Common parameters:
    - `charset`: Character encoding (e.g., `UTF-8`).
    - `name`: Name of the metadata (e.g., `viewport`).
    - `content`: Content of the metadata.
  - Usage: Defines document settings like encoding and viewport.
  - Example:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- `<link>`: Links external resources like stylesheets or icons.
  - Parameters:
    - `rel`: Relationship type (e.g., `stylesheet`, `icon`).
    - `href`: URL of the linked resource.
    - `type`: MIME type (optional).
  - Usage: Used to include CSS files or favicons.
  - Example:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- `<style>`: Embeds internal CSS styles.
  - Usage: Place CSS rules directly inside the document.
  - Example:
  ```html
  <style>
    body { font-family: Arial; }
  </style>
  ```
- `<script>`: Embeds or links JavaScript code.
  - Parameters:
    - `src`: URL of external script.
    - `type`: MIME type (optional).
    - `async`, `defer`: Script loading behavior.
  - Usage: Add interactivity or functionality.
  - Example:
  ```html
  <script src="app.js" defer></script>
  ```

## Sectioning Elements
- `<body>`: Contains the content of the document.
  - Usage: Visible content goes here.
  - Example:
  ```html
  <body>
    <h1>Welcome</h1>
  </body>
  ```
- `<header>`: Introductory content or navigation links.
  - Usage: Typically contains logo, site title, navigation.
  - Example:
  ```html
  <header>
    <h1>Site Title</h1>
    <nav>...</nav>
  </header>
  ```
- `<nav>`: Navigation links.
  - Usage: Contains primary site navigation.
  - Example:
  ```html
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  ```
- `<main>`: Main content of the document.
  - Usage: Unique main content, one per page.
  - Example:
  ```html
  <main>
    <article>...</article>
  </main>
  ```
- `<section>`: Thematic grouping of content.
  - Usage: Group related content with a heading.
  - Example:
  ```html
  <section>
    <h2>Features</h2>
    <p>Details about features.</p>
  </section>
  ```
- `<article>`: Independent, self-contained content.
  - Usage: Blog posts, news articles, forum posts.
  - Example:
  ```html
  <article>
    <h2>Blog Post Title</h2>
    <p>Content...</p>
  </article>
  ```
- `<aside>`: Content tangentially related to the main content.
  - Usage: Sidebars, pull quotes, related links.
  - Example:
  ```html
  <aside>
    <h3>Related</h3>
    <p>Links or info.</p>
  </aside>
  ```
- `<footer>`: Footer for a section or page.
  - Usage: Copyright, contact info, legal links.
  - Example:
  ```html
  <footer>
    <p>&copy; 2025 My Site</p>
  </footer>
  ```
  <script src="app.js" defer></script>

## Text Content Elements
- `<h1>` to `<h6>`: Headings, `<h1>` is the highest level.
  - Example: `<h1>Main Title</h1>`
- `<p>`: Paragraph.
  - Example: `<p>This is a paragraph.</p>`
- `<hr>`: Thematic break (horizontal rule).
- `<pre>`: Preformatted text.
  - Example:
  ```html
  <pre>
  Line 1
  Line 2
  </pre>
  ```
- `<blockquote>`: Quoted section.
  - Example:
  ```html
  <blockquote cite="https://example.com">
    This is a quote.
  </blockquote>
  ```
- `<ol>`: Ordered list.
  - Example:
  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
  </ol>
  ```
- `<ul>`: Unordered list.
  - Example:
  ```html
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
  ```
- `<li>`: List item.
- `<dl>`: Description list.
  - Example:
  ```html
  <dl>
    <dt>Term</dt>
    <dd>Description</dd>
  </dl>
  ```
- `<dt>`: Term/name in a description list.
- `<dd>`: Description of a term in a description list.
- `<a>`: Hyperlink.
  - Parameters:
    - `href`: URL to link to.
    - `target`: Where to open the link (`_blank`, `_self`).
    - `rel`: Relationship (e.g., `noopener`).
  - Example: `<a href="https://example.com" target="_blank" rel="noopener">Example</a>`
- `<em>`: Emphasized text (usually italic).
- `<strong>`: Strong importance (usually bold).
- `<small>`: Smaller text.
- `<cite>`: Citation.
- `<code>`: Inline code.
  - Example: `<code>console.log('Hello');</code>`
- `<kbd>`: Keyboard input.
- `<samp>`: Sample output.
- `<var>`: Variable.
- `<br>`: Line break.
- `<span>`: Generic inline container.
- `<b>`: Bold text.
- `<i>`: Italic text.
- `<u>`: Underlined text.
- `<mark>`: Marked/highlighted text.
- `<del>`: Deleted text.
- `<ins>`: Inserted text.

## Embedded Content
- `<img>`: Image.
  - Parameters:
    - `src`: Image URL.
    - `alt`: Alternative text.
    - `width`, `height`: Dimensions.
  - Example: `<img src="image.jpg" alt="Description" width="300" height="200">`
- `<audio>`: Audio content.
- `<video>`: Video content.
- `<source>`: Media source for audio/video.
- `<track>`: Text tracks for media.
- `<iframe>`: Inline frame to embed another document.
  - Parameters:
    - `src`: URL of the embedded page.
    - `title`: Description for accessibility.
    - `width`, `height`: Dimensions.
  - Example: `<iframe src="https://example.com" title="Example" width="600" height="400"></iframe>`
- `<embed>`: External content or plugin.
- `<object>`: External resource.
- `<param>`: Parameters for `<object>`.
- `<canvas>`: Graphics drawing area.
- `<map>`: Image map.
- `<area>`: Hotspot in an image map.

## Table Content
- `<table>`: Table.
- `<caption>`: Table caption.
- `<thead>`: Table header group.
- `<tbody>`: Table body group.
- `<tfoot>`: Table footer group.
- `<tr>`: Table row.
- `<th>`: Table header cell.
- `<td>`: Table data cell.

## Forms and Input
- `<form>`: Form container.
- `<input>`: Input control.
  - Parameters:
    - `type`: Type of input (text, password, checkbox, radio, submit, etc.).
    - `name`: Name of the input.
    - `value`: Value of the input.
    - `placeholder`: Placeholder text.
    - `required`: Required field.
  - Example: `<input type="text" name="username" placeholder="Enter username" required>`
- `<textarea>`: Multi-line text input.
- `<button>`: Button.
- `<select>`: Drop-down list.
- `<option>`: Option in a drop-down list.
- `<label>`: Label for form control.
- `<fieldset>`: Group related form elements.
- `<legend>`: Caption for `<fieldset>`.
- `<datalist>`: Predefined options for input.
- `<output>`: Result of a calculation.
- `<progress>`: Progress bar.
- `<meter>`: Scalar measurement within a known range.

## Interactive Elements
- `<details>`: Disclosure widget.
- `<summary>`: Summary for `<details>`.
- `<dialog>`: Dialog box or window.
- `<menu>`: List of commands.
- `<menuitem>`: Command in a menu.

## Scripting
- `<script>`: JavaScript code.
- `<noscript>`: Content for browsers without scripting.

## Metadata
- `<base>`: Base URL for relative links.
- `<meta>`: Metadata about the document.

## Global Attributes (common to most elements)
- `id`: Unique identifier.
- `class`: CSS class.
- `style`: Inline CSS styles.
- `title`: Additional information.
- `lang`: Language of element content.
- `hidden`: Indicates element is not yet, or is no longer, relevant.

## ARIA and Accessibility
- `role`: Defines the role of an element.
- `aria-*`: Various attributes to improve accessibility.

---

This reference sheet covers the most commonly used HTML5 elements and attributes, with parameters and examples to aid understanding and usage.
