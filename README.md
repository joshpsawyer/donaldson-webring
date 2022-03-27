# The Donaldsons Webring

## What is this?

Ah, the webring. Friends and like-minded people joining up to promote eachother
before search engines ruled everything. [Wikipedia Has A Great Article](https://en.wikipedia.org/wiki/Webring) but it
is sufficient to say that we're all artist friends that want to band together.

This particular webring is based on the [garlic garden Onionring](https://garlic.garden/onionring/) which can be viewed in its original form at the garlic garden onionring website. Some modifications were made to allow site names and descriptions.

## How do I join?

Contact somebody in the group that can vouch for you.

## What do I put on my site?

After joining the webring, simply paste the following on your website to render the widget.

```html
<div id='donaldsonwebring'>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-variables.js"></script>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-widget.js"></script>
</div>
```

The above renders a table with one row and 3 columns. To render a table with 3 rows and one column, use:

```html
<div id='donaldsonwebring'>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-variables.js"></script>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-widget-vertical.js"></script>
</div>
```

For more control, you can render 3 divs and no table:

```html
<div id='donaldsonwebring'>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-variables.js"></script>
<script type="text/javascript" src="https://webring.joshpsawyer.com/onionring-widget-div.js"></script>
</div>
```

## Is there a style?

Sure, there's some default styling done via [onionring.css](onionring.css). Load it with

```html
<link rel="stylesheet" href="https://webring.joshpsawyer.com/onionring.css">
```

in the `<head></head>` part of your website... or don't and just write your own CSS! Use the #donaldsonwebring selector to target the elements.
